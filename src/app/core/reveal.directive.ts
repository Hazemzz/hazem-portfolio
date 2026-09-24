import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * The hidden state only applies once `index.html` has marked the page as `reveal-ready`,
 * so prerendered content stays visible without JavaScript or with reduced motion.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective {
  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        element.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            element.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.01 },
      );

      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
