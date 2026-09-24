import { FocusArea, Profile } from '../models/portfolio.models';

export const profile: Profile = {
  name: 'Hazem Eid Abd El-Raouf El-Azb',
  shortName: 'Hazem El-Azb',
  initials: 'HE',
  role: 'Backend Developer',
  roleDetail: '.NET Backend Developer',
  cvTitle: 'Backend .NET Developer',
  location: 'Cairo, Egypt',
  email: 'Hazem.eid997@gmail.com',
  phone: { display: '+20 107 008 6319', href: 'tel:+201070086319' },
  linkedin: { label: 'linkedin.com/in/hazem-elazb', url: 'https://www.linkedin.com/in/hazem-elazb' },
  github: { label: 'github.com/Hazemzz', url: 'https://github.com/Hazemzz' },
  yearsOfExperience: '6+',
  heroSummary:
    'C#/.NET backend engineer with 6+ years of experience building and maintaining enterprise software, ' +
    'backend services, APIs, and third-party integrations, working remotely with international teams.',
  about: [
    'I am a C#/.NET backend engineer with 6+ years of experience building and maintaining enterprise software, ' +
      'backend services, APIs, and third-party integrations.',
    'My work covers business logic, service layers, data access, databases, and desktop applications. ' +
      'I focus on owning features end to end: APIs and service contracts, database changes, configuration, and testing.',
    'I have worked remotely with international teams in Germany and England, across enterprise, e-commerce, ' +
      'and financial services domains.',
  ],
  domains: ['Enterprise', 'E-commerce', 'Financial services'],
  currentPosition: {
    role: 'Backend Developer',
    company: 'Mauve Mailorder Software',
    location: 'Remote, Germany',
  },
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Upper-Intermediate' },
  ],
  cv: {
    href: 'cv/Hazem-Eid-Abd-El-Raouf-El-Azb-CV.pdf',
    downloadName: 'Hazem_Eid Abd El-Raouf El-Azb_CV.pdf',
  },
};

/** "What I work on" cards in the About section. Each line is backed by the CV. */
export const focusAreas: FocusArea[] = [
  {
    title: 'Backend services & APIs',
    text: 'ASP.NET Core, ServiceStack, and REST APIs, including APIs for mobile applications.',
  },
  {
    title: 'Third-party integrations',
    text: 'Payment providers, shipping and carriers, Amazon, push notifications, pharmacy platforms, Stripe, Zillow, and Nylas.',
  },
  {
    title: 'Data & persistence',
    text: 'NHibernate, EF Core, and ADO.NET on top of MySQL and SQL Server.',
  },
  {
    title: 'Production systems',
    text: 'Resolving production issues around pricing, foreign currencies, inventory valuation, and batch handling.',
  },
  {
    title: 'Desktop enterprise software',
    text: 'WPF development and modernization, including dialog migrations and replacing the embedded browser component.',
  },
  {
    title: 'Architecture',
    text: 'Service-layer gateways for external APIs, clean architecture, SOLID principles, and design patterns.',
  },
];
