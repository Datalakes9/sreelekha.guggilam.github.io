export interface Experience {
  title: string;
  institution: string;
  time: string;
  description?: string;
}

export interface Education {
  title: string;
  institution: string;
  time: string;
  description?: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  time: string;
  type?: 'conference' | 'journal' | 'workshop' | 'preprint';
  url?: string;
  doi?: string;
  citation?: string;
  abstract?: string;
}

export function isExperience(element: Experience | Education): element is Experience {
  return 'title' in element && 'institution' in element;
}

export function isEducation(element: Education | Experience): element is Education {
  return 'title' in element && 'institution' in element;
}
