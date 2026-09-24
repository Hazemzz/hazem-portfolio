import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { focusAreas, profile } from '../../data/profile';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  imports: [SectionHeading, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly profile = profile;
  protected readonly focusAreas = focusAreas;
}
