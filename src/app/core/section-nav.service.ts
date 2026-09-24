import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';

/**
 * Smooth in-page navigation plus scroll-spy for the sticky header.
 * Browser-only work is started from `afterNextRender`, so this is safe during prerendering.
 */
@Injectable({ providedIn: 'root' })
export class SectionNavService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  /** Id of the section currently under the header, or '' while in the hero. */
  readonly activeId = signal('');

  /** Scrolls to a section, updates the URL hash, and moves focus for keyboard and screen-reader users. */
  scrollTo(id: string, event?: Event): void {
    const target = this.document.getElementById(id);
    const view = this.document.defaultView;
    if (!target || !view) {
      return;
    }

    event?.preventDefault();
    const reduceMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    target.focus({ preventScroll: true });

    const { pathname, search } = view.location;
    view.history.replaceState(null, '', id === 'top' ? `${pathname}${search}` : `${pathname}${search}#${id}`);
  }

  /** Starts tracking which of the given sections is in view. Call once, in the browser. */
  track(ids: readonly string[]): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = view.innerHeight * 0.35;
      const atBottom = view.innerHeight + view.scrollY >= this.document.documentElement.scrollHeight - 4;
      let current = '';

      for (const id of ids) {
        const section = this.document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      this.activeId.set(atBottom ? ids[ids.length - 1] : current);
    };

    const onScroll = () => {
      if (!frame) {
        frame = view.requestAnimationFrame(update);
      }
    };

    view.addEventListener('scroll', onScroll, { passive: true });
    view.addEventListener('resize', onScroll, { passive: true });
    update();

    this.destroyRef.onDestroy(() => {
      view.removeEventListener('scroll', onScroll);
      view.removeEventListener('resize', onScroll);
      if (frame) view.cancelAnimationFrame(frame);
    });
  }
}
