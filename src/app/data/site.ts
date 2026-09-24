import { NavItem } from '../models/portfolio.models';

export const site = {
  /**
   * Public URL of the deployed site, without a trailing slash,
   * e.g. 'https://hazem-elazb.vercel.app' or 'https://hazemzz.github.io/portfolio'.
   * Used for the canonical link and absolute Open Graph URLs. Leave empty until you know it.
   */
  url: 'https://hazem-portfolio.vercel.app',
  title: 'Hazem Eid Abd El-Raouf El-Azb | Backend .NET Developer',
  description:
    'Backend .NET developer with 6+ years of experience building enterprise software, backend services, APIs, ' +
    'and third-party integrations with C#, ASP.NET Core, ServiceStack, NHibernate, and SQL.',
  ogImage: 'og-image.png',
};

/** Section ids double as anchor targets and scroll-spy targets. */
export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
