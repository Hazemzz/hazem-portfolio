import { ChangeDetectionStrategy, Component } from '@angular/core';
import { formatDateRange } from '../../core/dates';
import { RevealDirective } from '../../core/reveal.directive';
import { certifications, education } from '../../data/education';
import { profile } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-education',
  imports: [SectionHeading, RevealDirective, Icon],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  protected readonly education = education.map((entry) => ({
    ...entry,
    period: formatDateRange(entry.start, entry.end),
  }));
  protected readonly certifications = certifications;
  protected readonly languages = profile.languages;
}
