import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { formatDateRange, formatDuration } from '../../core/dates';
import { RevealDirective } from '../../core/reveal.directive';
import { SectionNavService } from '../../core/section-nav.service';
import { experience } from '../../data/experience';
import { projects } from '../../data/projects';
import { Experience as ExperienceEntry, Highlight } from '../../models/portfolio.models';
import { Icon } from '../../shared/icon';
import { SectionHeading } from '../../shared/section-heading';

interface HighlightGroup {
  label?: string;
  items: string[];
}

/** Consecutive highlights with the same label are shown under one label. */
function groupHighlights(highlights: Highlight[]): HighlightGroup[] {
  const groups: HighlightGroup[] = [];
  for (const { label, text } of highlights) {
    const last = groups.at(-1);
    if (last && label && last.label === label) {
      last.items.push(text);
    } else {
      groups.push({ label, items: [text] });
    }
  }
  return groups;
}

function toViewModel(job: ExperienceEntry) {
  return {
    ...job,
    current: job.end === null,
    period: formatDateRange(job.start, job.end),
    duration: formatDuration(job.start, job.end),
    place: job.location ? (job.remote ? `Remote · ${job.location}` : job.location) : '',
    groups: groupHighlights(job.highlights),
    relatedProjects: projects.filter((project) => project.experienceId === job.id),
  };
}

@Component({
  selector: 'app-experience',
  imports: [SectionHeading, RevealDirective, Icon],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly nav = inject(SectionNavService);
  protected readonly entries = experience.map(toViewModel);
}
