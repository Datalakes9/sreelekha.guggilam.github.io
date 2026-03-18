#!/usr/bin/env python3
"""
Fetch publications from Google Scholar and update src/data/cv.ts.
Looks up DOIs from CrossRef for each publication.

Usage:
    python3 scripts/update_publications.py

Requires: pip install scholarly
"""

import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path
from scholarly import scholarly

# Google Scholar author ID (from settings.ts)
SCHOLAR_ID = "tzu0AM8AAAAJ"

CV_TS_PATH = Path(__file__).parent.parent / "src" / "data" / "cv.ts"


def lookup_doi(title: str, authors_first_last: str = "") -> str:
    """Look up a DOI from CrossRef using the paper title."""
    try:
        query = urllib.parse.quote(title)
        url = f"https://api.crossref.org/works?query.title={query}&rows=1&mailto=scholarly-script@example.com"
        req = urllib.request.Request(url, headers={"User-Agent": "PublicationUpdater/1.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())

        items = data.get("message", {}).get("items", [])
        if not items:
            return ""

        item = items[0]
        # Verify the title is a close match (lowercase comparison)
        cr_title = item.get("title", [""])[0].lower().strip()
        our_title = title.lower().strip()

        # Check similarity - at least 80% of words match
        cr_words = set(re.findall(r'\w+', cr_title))
        our_words = set(re.findall(r'\w+', our_title))
        if not our_words:
            return ""
        overlap = len(cr_words & our_words) / len(our_words)
        if overlap >= 0.8:
            return item.get("DOI", "")
        return ""
    except Exception as e:
        print(f"    CrossRef lookup failed: {e}")
        return ""


def format_authors_apa(authors_str: str) -> str:
    """Convert 'First Last and First Last' to 'F. Last, F. Last' style."""
    authors = [a.strip() for a in authors_str.replace(" and ", ", ").split(", ") if a.strip()]
    formatted = []
    for author in authors:
        parts = author.strip().split()
        if len(parts) >= 2:
            last = parts[-1]
            initials = " ".join(f"{p[0]}." for p in parts[:-1])
            formatted.append(f"{initials} {last}")
        else:
            formatted.append(author)
    return ", ".join(formatted)


def build_citation(pub: dict) -> str:
    """Build an APA-style citation string."""
    authors = format_authors_apa(pub["authors"])
    year = pub["time"]
    title = pub["title"]
    venue = pub["venue"]
    doi = pub.get("doi", "")

    cite = f"{authors} ({year}). {title}."
    if venue:
        cite += f" {venue}."
    if doi:
        cite += f" https://doi.org/{doi}"
    return cite


def fetch_publications(scholar_id: str) -> list[dict]:
    """Fetch all publications for the given Google Scholar author ID."""
    print(f"Fetching publications for scholar ID: {scholar_id} ...")
    author = scholarly.search_author_id(scholar_id)
    author = scholarly.fill(author, sections=["publications"])

    pubs = []
    total = len(author["publications"])
    for i, pub in enumerate(author["publications"], 1):
        print(f"  [{i}/{total}] {pub['bib'].get('title', 'Unknown')}")
        try:
            filled = scholarly.fill(pub)
            bib = filled["bib"]
        except Exception as e:
            print(f"    Warning: could not fetch details ({e}), using summary")
            bib = pub["bib"]
            filled = pub

        # Extract year - skip publications without a year
        year = str(bib.get("pub_year", "")).strip()
        if not year:
            print(f"    Skipping: no publication year")
            continue

        # Build authors string
        authors_raw = bib.get("author", "")
        if isinstance(authors_raw, list):
            authors = " and ".join(authors_raw)
        else:
            authors = authors_raw
        authors = re.sub(r",?\s*\.\.\.$", ", et al.", authors)

        # Build venue
        venue = bib.get("journal", "") or bib.get("conference", "") or bib.get("venue", "") or bib.get("publisher", "")
        volume = bib.get("volume", "")
        pages = bib.get("pages", "")
        number = bib.get("number", "")

        venue_full = venue
        if volume:
            venue_full += f", vol. {volume}"
        if number:
            venue_full += f", no. {number}"
        if pages:
            venue_full += f", pp. {pages}"

        # Look up DOI from CrossRef
        title = bib.get("title", "")
        doi = lookup_doi(title)
        if doi:
            print(f"    DOI: {doi}")
        else:
            print(f"    No DOI found")
        time.sleep(0.5)  # Be polite to CrossRef API

        entry = {
            "title": title,
            "authors": authors,
            "venue": venue_full,
            "time": year,
            "doi": doi,
        }
        entry["citation"] = build_citation(entry)
        pubs.append(entry)

    # Sort by year descending
    pubs.sort(key=lambda p: p["time"], reverse=True)
    return pubs


def escape_ts_string(s: str) -> str:
    """Escape a string for use in a TypeScript double-quoted string."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def format_publications_ts(pubs: list[dict]) -> str:
    """Format publications as TypeScript array source code."""
    lines = []
    lines.append("export const publications = [")
    for pub in pubs:
        lines.append("\t{")
        lines.append(f'\t\ttitle: "{escape_ts_string(pub["title"])}",')
        lines.append(f'\t\tauthors: "{escape_ts_string(pub["authors"])}",')
        lines.append(f'\t\tvenue: "{escape_ts_string(pub["venue"])}",')
        lines.append(f'\t\ttime: "{escape_ts_string(pub["time"])}",')
        lines.append(f'\t\tdoi: "{escape_ts_string(pub.get("doi", ""))}",')
        lines.append(f'\t\tcitation: "{escape_ts_string(pub.get("citation", ""))}"')
        lines.append("\t},")
    lines.append("];")
    return "\n".join(lines)


def update_cv_ts(pubs_ts: str, count: int):
    """Replace the publications array in cv.ts with the new data."""
    content = CV_TS_PATH.read_text()

    pattern = r"export const publications = \[.*?\];"
    if not re.search(pattern, content, re.DOTALL):
        print("Error: Could not find 'export const publications = [...]' in cv.ts")
        sys.exit(1)

    new_content = re.sub(pattern, pubs_ts, content, flags=re.DOTALL)
    CV_TS_PATH.write_text(new_content)
    print(f"\nUpdated {CV_TS_PATH} with {count} publications.")


def main():
    pubs = fetch_publications(SCHOLAR_ID)
    print(f"\nFetched {len(pubs)} publications from Google Scholar.")

    pubs_ts = format_publications_ts(pubs)
    update_cv_ts(pubs_ts, len(pubs))

    doi_count = sum(1 for p in pubs if p.get("doi"))
    print(f"DOIs found: {doi_count}/{len(pubs)}")
    print("Done! Run 'npm run build' to verify.")


if __name__ == "__main__":
    main()
