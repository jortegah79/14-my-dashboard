import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1>Heavy-loaders fast works</h1>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent { }
