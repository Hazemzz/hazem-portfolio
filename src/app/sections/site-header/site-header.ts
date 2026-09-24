import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { SectionNavService } from '../../core/section-nav.service';
import { ThemeService } from '../../core/theme.service';
import { profile } from '../../data/profile';
import { navItems } from '../../data/site';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-site-header',
  imports: [Icon],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '[class.is-open]': 'menuOpen()',
    '(document:keydown.escape)': 'closeMenu(true)',
  },
})
export class SiteHeader {
  protected readonly nav = inject(SectionNavService);
  protected readonly theme = inject(ThemeService);
  private readonly document = inject(DOCUMENT);

  protected readonly profile = profile;
  protected readonly items = navItems;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  private readonly menuButton = viewChild.required<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly mobilePanel = viewChild.required<ElementRef<HTMLElement>>('mobilePanel');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const view = this.document.defaultView!;
      const onScroll = () => this.scrolled.set(view.scrollY > 8);
      const desktop = view.matchMedia('(min-width: 960px)');
      const onBreakpoint = () => desktop.matches && this.closeMenu();

      onScroll();
      view.addEventListener('scroll', onScroll, { passive: true });
      desktop.addEventListener('change', onBreakpoint);

      destroyRef.onDestroy(() => {
        view.removeEventListener('scroll', onScroll);
        desktop.removeEventListener('change', onBreakpoint);
      });
    });
  }

  protected go(id: string, event: Event): void {
    this.closeMenu();
    this.nav.scrollTo(id, event);
  }

  protected toggleMenu(): void {
    this.menuOpen() ? this.closeMenu(true) : this.openMenu();
  }

  protected closeMenu(restoreFocus = false): void {
    if (!this.menuOpen()) {
      return;
    }
    this.menuOpen.set(false);
    this.document.documentElement.classList.remove('menu-open');
    if (restoreFocus) {
      this.menuButton().nativeElement.focus();
    }
  }

  private openMenu(): void {
    this.menuOpen.set(true);
    this.document.documentElement.classList.add('menu-open');
    // Move focus into the panel once it is rendered visible.
    requestAnimationFrame(() => this.mobilePanel().nativeElement.querySelector<HTMLElement>('a, button')?.focus());
  }
}
