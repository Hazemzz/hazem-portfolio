import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { education } from '../data/education';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { featuredSkills } from '../data/skills';
import { site } from '../data/site';

/** Writes title, meta, Open Graph, canonical and JSON-LD tags. Runs during prerendering, so crawlers get plain HTML. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  apply(): void {
    const imageUrl = site.url ? `${site.url}/${site.ogImage}` : site.ogImage;

    this.title.setTitle(site.title);
    this.meta.updateTag({ name: 'description', content: site.description });
    this.meta.updateTag({ name: 'author', content: profile.name });

    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:title', content: site.title });
    this.meta.updateTag({ property: 'og:description', content: site.description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: `${profile.name}, ${profile.cvTitle}` });
    this.meta.updateTag({ property: 'og:site_name', content: profile.name });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: site.title });
    this.meta.updateTag({ name: 'twitter:description', content: site.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    if (site.url) {
      this.meta.updateTag({ property: 'og:url', content: `${site.url}/` });
      this.setCanonical(`${site.url}/`);
    }

    this.setStructuredData();
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }

  private setStructuredData(): void {
    const id = 'person-structured-data';
    if (this.document.getElementById(id)) {
      return;
    }

    const current = experience.find((job) => job.end === null);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.cvTitle,
      email: `mailto:${profile.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
      sameAs: [profile.linkedin.url, profile.github.url],
      knowsAbout: featuredSkills,
      knowsLanguage: profile.languages.map((language) => language.name),
      alumniOf: education.map((entry) => ({ '@type': 'CollegeOrUniversity', name: entry.institution })),
      ...(current && { worksFor: { '@type': 'Organization', name: current.company } }),
      ...(site.url && { url: `${site.url}/` }),
    };

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
