import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionNavService } from '../../core/section-nav.service';
import { profile } from '../../data/profile';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-site-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container inner">
      <div class="identity">
        <p class="name">{{ profile.name }}</p>
        <p class="role">{{ profile.cvTitle }} · {{ profile.location }}</p>
      </div>

      <ul class="links" role="list">
        <li>
          <a [href]="'mailto:' + profile.email" aria-label="Email"><app-icon name="mail" /></a>
        </li>
        <li>
          <a [href]="profile.linkedin.url" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <app-icon name="linkedin" />
          </a>
        </li>
        <li>
          <a [href]="profile.github.url" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <app-icon name="github" />
          </a>
        </li>
        <li>
          <a [href]="profile.cv.href" [attr.download]="profile.cv.downloadName" aria-label="Download CV (PDF)">
            <app-icon name="download" />
          </a>
        </li>
      </ul>

      <div class="bottom">
        <p>© {{ year }} {{ profile.shortName }}</p>
        <a class="top" href="#top" (click)="nav.scrollTo('top', $event)">
          Back to top <app-icon name="arrow-up" [size]="14" />
        </a>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      border-top: 1px solid var(--border);
      background: var(--bg-elevated);
    }

    .inner {
      display: grid;
      gap: 1.5rem;
      padding-block: 2.5rem;
    }

    .identity p {
      margin: 0;
    }

    .name {
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    .role {
      margin-top: 0.2rem !important;
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    .links {
      display: flex;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      list-style: none;

      a {
        display: grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        color: var(--text-muted);
        transition:
          color 0.2s ease,
          border-color 0.2s ease;

        &:hover {
          color: var(--accent);
          border-color: var(--accent-border);
        }
      }
    }

    .bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
      font-size: 0.8125rem;
      color: var(--text-subtle);

      p {
        margin: 0;
      }
    }

    .top {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      border-radius: 4px;
      transition: color 0.2s ease;

      &:hover {
        color: var(--text);
      }
    }

    @media (min-width: 768px) {
      .inner {
        grid-template-columns: 1fr auto;
        align-items: center;
      }

      .bottom {
        grid-column: 1 / -1;
      }
    }
  `,
})
export class SiteFooter {
  protected readonly nav = inject(SectionNavService);
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
}
