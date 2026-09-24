import { Certification, Education } from '../models/portfolio.models';

export const education: Education[] = [
  {
    degree: 'Bachelor of Arts in English Literature',
    institution: 'Tanta University',
    start: '2015',
    end: '2019',
    location: 'Egypt',
    grade: 'Very Good',
  },
];

export const certifications: Certification[] = [
  {
    name: 'C# & ASP.NET Training',
    issuer: 'IBM',
    location: 'Tanta',
    year: '2016',
    topics: ['Programming with C#', 'OOP and ASP.NET Web Application'],
    note: 'Accredited course with completion certification',
  },
];
