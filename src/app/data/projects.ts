import { Project } from '../models/portfolio.models';

/**
 * Selected work. Company and dates are read from the linked experience entry,
 * so they only need to be edited in `experience.ts`.
 */
export const projects: Project[] = [
  {
    id: 'savvybroker',
    name: 'SavvyBroker',
    experienceId: 'saqaya',
    featured: true,
    summary: 'Mortgage and financial advisory system, where I worked on the backend services.',
    contributions: [
      'Contributed to the core architecture and development of the backend services',
      'Implemented key modules for client management, scenario modeling, and notification scheduling',
      'Applied clean architecture and best practices',
    ],
    integrations: [
      { name: 'Stripe', purpose: 'Payment workflows, webhook handling, and transaction lifecycle management' },
      { name: 'Firebase Cloud Messaging', purpose: 'Real-time alerts and notifications to users' },
      { name: 'Zillow', purpose: 'Real-time mortgage rate retrieval' },
      { name: 'Nylas', purpose: 'Email and calendar syncing' },
      { name: 'Hangfire', purpose: 'Background task automation and service orchestration' },
    ],
    tags: ['ASP.NET Core', 'Azure', 'SQL', 'Hangfire', 'Stripe', 'FCM'],
    links: [{ label: 'savvy-broker.com', url: 'https://savvy-broker.com/' }],
  },
  {
    id: 'external-integrations',
    name: 'External service integrations',
    experienceId: 'mauve',
    summary:
      'End-to-end integrations between enterprise software and external services, from APIs and service ' +
      'contracts to database changes, configuration, and testing.',
    contributions: [
      'Payment providers, shipping and carrier services, Amazon, mobile push notifications, and pharmacy platforms',
      'Introduced service-layer gateways for external API communication',
    ],
    tags: ['C# / .NET', 'Payments', 'Shipping & carriers', 'Amazon APIs', 'Pharmacy platforms'],
  },
  {
    id: 'wpf-modernization',
    name: 'WPF modernization & dialog migration',
    experienceId: 'mauve',
    summary: 'Contributions to major modernization initiatives in the WPF enterprise application.',
    contributions: [
      'Dialog migration for payment, shipping, end-of-day closing, and Securpharm functionality',
      'Modernized the embedded browser component and kept the replacement current through upstream updates',
    ],
    tags: ['WPF', 'C#', '.NET', 'Securpharm'],
  },
  {
    id: 'municipal-platforms',
    name: 'Municipal service platforms',
    experienceId: 'devopsolutions',
    summary:
      'Key modules for Amanat Al-Taif and Amanat Al-Baha, supporting digital transformation of municipal services.',
    contributions: [
      'APIs for mobile applications: city services, requests, and notifications',
      'ASP.NET Core MVC applications and RESTful APIs',
    ],
    tags: ['ASP.NET Core MVC', 'REST APIs', 'SQL Server', 'MySQL'],
    links: [
      { label: 'Amanat Al-Taif', url: 'https://www.taifcity.gov.sa/' },
      { label: 'Amanat Al-Baha', url: 'https://baha.gov.sa/' },
    ],
  },
  {
    id: 'modular-erp',
    name: 'Modular ERP system',
    experienceId: 'beeit',
    summary: 'Full-stack web applications supporting key modules of a modular ERP system.',
    contributions: ['XML data transformation', 'Database optimization to improve system efficiency'],
    tags: ['.NET Core', 'Angular', 'XML'],
  },
  {
    id: 'maintenance-center',
    name: 'Maintenance center system',
    experienceId: 'freelance',
    summary: 'Web-based system for a refrigerator maintenance center.',
    contributions: ['Service orders', 'Customer information', 'Technician assignments'],
    tags: ['ASP.NET Core', 'Angular'],
  },
  {
    id: 'retail-pos',
    name: 'Desktop POS application',
    experienceId: 'freelance',
    summary: 'User-friendly point-of-sale desktop application, launched for clothing shops.',
    contributions: [],
    outcome: 'Simplified sales processes for clothing shops.',
    tags: ['.NET', 'Desktop'],
  },
];
