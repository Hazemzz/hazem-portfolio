import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { profile } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-contact',
  imports: [SectionHeading, RevealDirective, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly document = inject(DOCUMENT);
  protected readonly profile = profile;
  protected readonly copied = signal(false);
  private resetTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await this.document.defaultView?.navigator.clipboard.writeText(profile.email);
      this.copied.set(true);
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard access can be denied; the mailto link next to it still works.
    }
  }
}
