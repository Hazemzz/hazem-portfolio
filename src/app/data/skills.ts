import { SkillGroup, SystemLayer } from '../models/portfolio.models';

/** Technical skills, grouped. Everything here is listed on the CV. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Main focus: services, APIs, and business logic in C#/.NET.',
    items: [
      { name: 'C#', featured: true },
      { name: '.NET', featured: true },
      { name: 'ASP.NET Core', featured: true },
      { name: 'ServiceStack', featured: true },
      { name: 'REST APIs', featured: true },
      { name: 'ASP.NET MVC' },
      { name: 'LINQ' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Persistence',
    description: 'Data access and relational databases behind production systems.',
    items: [
      { name: 'SQL Server', featured: true },
      { name: 'MySQL', featured: true },
      { name: 'NHibernate', featured: true },
      { name: 'EF Core', featured: true },
      { name: 'ADO.NET' },
    ],
  },
  {
    id: 'integrations',
    title: 'Cloud & Integrations',
    description: 'Hosting, background jobs, and third-party APIs.',
    items: [
      { name: 'Azure', featured: true },
      { name: 'Hangfire' },
      { name: 'Stripe' },
      { name: 'Firebase Cloud Messaging' },
      { name: 'Amazon APIs' },
      { name: 'Nylas' },
      { name: 'Zillow' },
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop Applications',
    description: 'Production enterprise desktop software, including WPF modernization.',
    items: [{ name: 'WPF', featured: true }, { name: 'WinForms' }],
  },
  {
    id: 'architecture',
    title: 'Architecture & Practices',
    description: 'How the code is structured and kept maintainable.',
    items: [{ name: 'Clean Architecture' }, { name: 'SOLID Principles' }, { name: 'Design Patterns' }],
  },
  {
    id: 'tools',
    title: 'Tools & Reporting',
    description: 'Day-to-day tooling.',
    items: [{ name: 'Visual Studio' }, { name: 'Git' }, { name: 'Crystal Reports' }],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Used in earlier full-stack roles.',
    secondary: true,
    items: [
      { name: 'Angular 8+' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bootstrap' },
      { name: 'JavaScript' },
      { name: 'jQuery' },
    ],
  },
];

/** Hero badges: every skill flagged as featured, in group order. */
export const featuredSkills: string[] = skillGroups.flatMap((group) =>
  group.items.filter((item) => item.featured).map((item) => item.name),
);

/**
 * The layered overview in the hero. Each item comes from the CV's experience and skills;
 * it summarises where I usually work, not the architecture of one specific product.
 */
export const systemLayers: SystemLayer[] = [
  { id: 'clients', label: 'Clients', items: ['WPF desktop', 'Web apps', 'Mobile apps'], muted: true },
  { id: 'services', label: 'Services & APIs', items: ['ASP.NET Core', 'ServiceStack', 'REST APIs', 'Business logic'] },
  {
    id: 'integrations',
    label: 'Integration gateways',
    items: ['Payments', 'Shipping & carriers', 'Amazon', 'Push / FCM', 'Pharmacy platforms', 'Stripe', 'Nylas', 'Zillow'],
  },
  { id: 'jobs', label: 'Jobs & hosting', items: ['Hangfire', 'Azure'] },
  { id: 'data', label: 'Data access', items: ['NHibernate', 'EF Core', 'ADO.NET', 'MySQL', 'SQL Server'] },
];
