import { Experience } from '../models/portfolio.models';

/** Professional experience, in the same order as the CV. */
export const experience: Experience[] = [
  {
    id: 'mauve',
    company: 'Mauve Mailorder Software GmbH & Co KG',
    role: 'Backend Developer',
    start: '2020-09',
    end: null,
    location: 'Germany',
    remote: true,
    context:
      'Enterprise software built with WPF, C#/.NET, ServiceStack, and NHibernate/MySQL, including integrations ' +
      'with payment, shipping, Amazon, and pharmacy platforms.',
    highlights: [
      {
        label: 'Core',
        text: 'Develop and maintain enterprise software across WPF, C#/.NET, ServiceStack, business logic, and NHibernate/MySQL.',
      },
      {
        label: 'Integrations',
        text: 'Design and implement end-to-end integrations with external services, covering APIs, service contracts, database changes, configuration, and testing.',
      },
      {
        label: 'Integrations',
        text: 'Delivered integrations for payment providers, shipping and carrier services, Amazon, mobile push notifications, and pharmacy platforms.',
      },
      {
        label: 'Architecture',
        text: 'Improved the application architecture by introducing service-layer gateways for external API communication.',
      },
      {
        label: 'Features',
        text: 'Developed administration functionality for pharmacy groups and portal customers, including stock and pricing management across branches.',
      },
      {
        label: 'Modernization',
        text: 'Contributed to major WPF modernization and dialog migration initiatives, including payment, shipping, end-of-day closing, and Securpharm functionality.',
      },
      {
        label: 'Modernization',
        text: 'Modernized the embedded browser component and maintained the replacement through subsequent upstream updates.',
      },
      {
        label: 'Production',
        text: 'Resolved complex production issues involving pricing, foreign currencies, inventory valuation, batch handling, and product integrations.',
      },
    ],
    tech: ['C#', '.NET', 'WPF', 'ServiceStack', 'NHibernate', 'MySQL', 'Amazon APIs'],
    links: [
      {
        label: 'Letter of Recommendation',
        url: 'https://drive.google.com/file/d/1Z5ZE8Z5DKVzYv2SNyPAUtPGC5YZdBk5e/view?usp=sharing',
      },
    ],
  },
  {
    id: 'saqaya',
    company: 'Saqaya',
    role: 'Backend Developer',
    start: '2024-04',
    end: '2025-06',
    location: 'England',
    remote: true,
    context: 'Backend services for SavvyBroker, a mortgage and financial advisory system.',
    highlights: [
      {
        label: 'Architecture',
        text: 'Contributed to the core architecture and development of backend services for the SavvyBroker system.',
      },
      {
        label: 'Modules',
        text: 'Implemented key modules for client management, scenario modeling, and notification scheduling, following clean architecture and best practices.',
      },
      {
        label: 'Payments',
        text: 'Developed secure payment workflows with the Stripe API, including webhook handling and transaction lifecycle management.',
      },
      {
        label: 'Notifications',
        text: 'Integrated Firebase Cloud Messaging (FCM) to deliver real-time alerts and notifications to users.',
      },
      {
        label: 'Integrations',
        text: 'Integrated third-party APIs, including Zillow for real-time mortgage rate retrieval and Nylas for email and calendar syncing.',
      },
      {
        label: 'Background jobs',
        text: 'Used ASP.NET Core, Azure, SQL, and Hangfire for background task automation and service orchestration.',
      },
    ],
    tech: ['ASP.NET Core', 'Azure', 'SQL', 'Hangfire', 'Stripe', 'Firebase Cloud Messaging', 'Zillow', 'Nylas'],
    links: [{ label: 'savvy-broker.com', url: 'https://savvy-broker.com/' }],
  },
  {
    id: 'devopsolutions',
    company: 'DevopSolutions',
    role: 'Full Stack Developer',
    start: '2020-07',
    end: '2022-01',
    location: 'Egypt',
    remote: true,
    context: 'Web applications and APIs for municipal service platforms.',
    highlights: [
      {
        label: 'Backend',
        text: 'Built ASP.NET Core MVC applications and RESTful APIs with SQL Server and MySQL backends.',
      },
      {
        label: 'Mobile APIs',
        text: 'Designed and implemented APIs for mobile applications, giving users access to city services, requests, and notifications.',
      },
      {
        label: 'Delivery',
        text: 'Delivered key modules for Amanat Al-Taif and Amanat Al-Baha, supporting digital transformation and municipal service platforms.',
      },
      {
        label: 'Frontend',
        text: 'Developed dynamic and responsive front-end modules using Angular 8+.',
      },
    ],
    tech: ['ASP.NET Core MVC', 'REST APIs', 'SQL Server', 'MySQL', 'Angular 8+'],
    links: [
      { label: 'Amanat Al-Taif', url: 'https://www.taifcity.gov.sa/' },
      { label: 'Amanat Al-Baha', url: 'https://baha.gov.sa/' },
    ],
  },
  {
    id: 'beeit',
    company: 'BEEIT',
    role: 'Full Stack Developer',
    start: '2020-01',
    end: '2020-07',
    location: 'Cairo, Egypt',
    context: 'A modular ERP system built with .NET Core and Angular.',
    highlights: [
      {
        label: 'ERP',
        text: 'Contributed to the development of a modular ERP system using .NET Core and Angular.',
      },
      {
        label: 'Data',
        text: 'Handled XML data transformation and performed database optimization to improve system efficiency.',
      },
      {
        label: 'Applications',
        text: 'Built and maintained full-stack web applications supporting key ERP modules.',
      },
    ],
    tech: ['.NET Core', 'Angular', 'XML'],
  },
  {
    id: 'freelance',
    company: 'Freelance Projects',
    role: '.NET Developer',
    start: '2017',
    end: '2019',
    context: 'Desktop and web applications for retail and service businesses.',
    highlights: [
      {
        label: 'Desktop',
        text: 'Launched a user-friendly desktop POS application that simplified sales processes for clothing shops.',
      },
      {
        label: 'Web',
        text: 'Developed a web-based system for a refrigerator maintenance center using ASP.NET Core and Angular, managing service orders, customer information, and technician assignments.',
      },
    ],
    tech: ['.NET', 'ASP.NET Core', 'Angular'],
  },
];
