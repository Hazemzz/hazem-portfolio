import { ChangeDetectionStrategy, Component } from '@angular/core';
import { formatDateRange } from '../../core/dates';
import { RevealDirective } from '../../core/reveal.directive';
import { experience } from '../../data/experience';
import { projects } from '../../data/projects';
import { Project } from '../../models/portfolio.models';
import { Icon } from '../../shared/icon';
import { SectionHeading } from '../../shared/section-heading';

function toViewModel(project: Project) {
  const job = experience.find((entry) => entry.id === project.experienceId);
  return {
    ...project,
    company: job?.company ?? '',
    roleContext: job ? `${job.role} · ${formatDateRange(job.start, job.end)}` : '',
  };
}

@Component({
  selector: 'app-projects',
  imports: [SectionHeading, RevealDirective, Icon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly all = projects.map(toViewModel);
  protected readonly featured = this.all.filter((project) => project.featured);
  protected readonly others = this.all.filter((project) => !project.featured);
}
