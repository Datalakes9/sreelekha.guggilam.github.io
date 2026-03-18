#!/usr/bin/env python3
"""
Fetch publications from Google Scholar and update src/data/cv.ts.

Usage:
    python3 scripts/update_publications.py

Requires: pip install scholarly
"""

import re
import sys
from pathlib import Path
from scholarly import scholarly

# Google Scholar author ID (from settings.ts)
SCHOLAR_ID = "tzu0AM8AAAAJ"

CV_TS_PATH = Path(__file__).parent.parent / "src" / "data" / "cv.ts"


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

        # Extract year
        year = str(bib.get("pub_year", ""))

        # Build authors string
        authors_raw = bib.get("author", "")
        if isinstance(authors_raw, list):
            authors = ", ".join(authors_raw)
        else:
            authors = authors_raw
        # Shorten "and others" / "..." to "et al."
        authors = re.sub(r",?\s*\.\.\.$", ", et al.", authors)

        # Build venue
        venue = bib.get("journal", "") or bib.get("conference", "") or bib.get("venue", "") or bib.get("publisher", "")

        # Volume, pages
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

        pubs.append({
            "title": bib.get("title", ""),
            "authors": authors,
            "venue": venue_full,
            "time": year,
        })

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
        lines.append(f'\t\ttime: "{escape_ts_string(pub["time"])}"')
        lines.append("\t},")
    lines.append("];")
    return "\n".join(lines)


def update_cv_ts(pubs_ts: str):
    """Replace the publications array in cv.ts with the new data."""
    content = CV_TS_PATH.read_text()

    # Match from "export const publications = [" to the closing "];"
    pattern = r"export const publications = \[.*?\];"
    if not re.search(pattern, content, re.DOTALL):
        print("Error: Could not find 'export const publications = [...]' in cv.ts")
        sys.exit(1)

    new_content = re.sub(pattern, pubs_ts, content, flags=re.DOTALL)
    CV_TS_PATH.write_text(new_content)
    print(f"\nUpdated {CV_TS_PATH} with {len(pubs_ts.splitlines()) - 2} publications.")


def main():
    pubs = fetch_publications(SCHOLAR_ID)
    print(f"\nFetched {len(pubs)} publications from Google Scholar.")

    pubs_ts = format_publications_ts(pubs)
    update_cv_ts(pubs_ts)

    print("Done! Run 'npm run build' to verify.")


if __name__ == "__main__":
    main()
