/**
 * Shared types for the portfolio content.
 * All visible CV content lives in `src/app/data/*` and follows these shapes.
 */

export interface ExternalLink {
  label: string;
  url: string;
}

/** 'YYYY-MM' when the month is known, otherwise 'YYYY'. */
export type PartialDate = string;

export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  /** Headline shown in the hero. */
  role: string;
  roleDetail: string;
  /** Title exactly as written on the CV. */
  cvTitle: string;
  location: string;
  email: string;
  phone: { display: string; href: string };
  linkedin: ExternalLink;
  github: ExternalLink;
  yearsOfExperience: string;
  heroSummary: string;
  about: string[];
  domains: string[];
  currentPosition: { role: string; company: string; location: string };
  languages: { name: string; level: string }[];
  cv: { href: string; downloadName: string };
}

export interface Highlight {
  /** Short scan label, e.g. "Integrations". */
  label?: string;
  text: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  start: PartialDate;
  /** `null` means the position is current. */
  end: PartialDate | null;
  location?: string;
  remote?: boolean;
  context: string;
  highlights: Highlight[];
  tech: string[];
  links?: ExternalLink[];
}

export interface ProjectIntegration {
  name: string;
  purpose: string;
}

export interface Project {
  id: string;
  name: string;
  /** Links the project to the role it was delivered in. */
  experienceId: string;
  summary: string;
  contributions: string[];
  integrations?: ProjectIntegration[];
  /** Only filled when the CV states a result explicitly. */
  outcome?: string;
  tags: string[];
  links?: ExternalLink[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  /** Shown as a hero badge and emphasised in the stack section. */
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
  /** De-emphasised groups (e.g. frontend work from earlier full-stack roles). */
  secondary?: boolean;
}

export interface FocusArea {
  title: string;
  text: string;
}

export interface Education {
  degree: string;
  institution: string;
  start: PartialDate;
  end: PartialDate;
  location: string;
  grade?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  location?: string;
  year: string;
  topics: string[];
  note?: string;
}

export interface SystemLayer {
  id: string;
  label: string;
  items: string[];
  muted?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}
