import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Consistent eyebrow + title + optional intro used at the top of every section. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="eyebrow"><span class="index">{{ index() }}</span>{{ eyebrow() }}</p>
    <h2 class="title" [id]="headingId()">{{ title() }}</h2>
    @if (intro()) {
      <p class="intro">{{ intro() }}</p>
    }
  `,
  styles: `
    :host {
      display: block;
      max-width: 44rem;
      margin-bottom: clamp(2.25rem, 4vw, 3.25rem);
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 0 0 0.9rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-subtle);
    }

    .index {
      color: var(--accent);
    }

    .index::after {
      content: '';
      display: inline-block;
      width: 1.5rem;
      height: 1px;
      margin-left: 0.75rem;
      vertical-align: middle;
      background: var(--border-strong);
    }

    .title {
      margin: 0;
      font-size: var(--text-h2);
      line-height: 1.12;
      letter-spacing: -0.028em;
      font-weight: 600;
    }

    .intro {
      margin: 1rem 0 0;
      color: var(--text-muted);
      font-size: 1.0625rem;
      line-height: 1.65;
    }
  `,
})
export class SectionHeading {
  readonly index = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly intro = input<string>();
}
