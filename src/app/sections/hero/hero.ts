import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionNavService } from '../../core/section-nav.service';
import { profile } from '../../data/profile';
import { featuredSkills, systemLayers } from '../../data/skills';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly nav = inject(SectionNavService);
  protected readonly profile = profile;
  protected readonly skills = featuredSkills;
  protected readonly layers = systemLayers;
}
