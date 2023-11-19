import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <section [ngClass]="['w-full',cssClass]">

  <ng-content/>

  </section>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent {

@Input({required:true}) cssClass!:string;

 }
