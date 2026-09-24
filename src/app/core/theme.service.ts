import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

/**
 * Dark by default. The initial theme is applied by an inline script in `index.html`
 * (before first paint); this service keeps it in sync when the visitor toggles it.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<Theme>('dark');

  /** Reads the theme already applied to <html>. Call in the browser. */
  init(): void {
    const current = this.document.documentElement.dataset['theme'];
    this.theme.set(current === 'light' ? 'light' : 'dark');
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.document.documentElement.dataset['theme'] = next;
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the toggle still works for this visit.
    }
  }
}
