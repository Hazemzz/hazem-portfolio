import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { skillGroups } from '../../data/skills';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-tech-stack',
  imports: [SectionHeading, RevealDirective],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStack {
  protected readonly groups = skillGroups;
}
