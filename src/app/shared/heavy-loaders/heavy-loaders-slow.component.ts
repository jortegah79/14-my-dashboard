import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1>Heavy-loaders slow  works</h1>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent { }
