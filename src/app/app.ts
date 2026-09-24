import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { SectionNavService } from './core/section-nav.service';
import { SeoService } from './core/seo.service';
import { ThemeService } from './core/theme.service';
import { navItems } from './data/site';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';
import { TechStack } from './sections/tech-stack/tech-stack';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, About, TechStack, Experience, Projects, Education, Contact, SiteFooter],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly nav = inject(SectionNavService);

  protected skipToContent(event: Event): void {
    this.nav.scrollTo('about', event);
  }

  constructor() {
    inject(SeoService).apply();
    const theme = inject(ThemeService);
    const document = inject(DOCUMENT);

    afterNextRender(() => {
      theme.init();
      this.nav.track(navItems.map((item) => item.id));
      document.documentElement.classList.add('app-ready');
    });
  }
}
