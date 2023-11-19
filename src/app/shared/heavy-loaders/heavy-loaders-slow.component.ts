import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <section [ngClass]="['w-full h-[620px]' , cssClass]">
Heavy Loader Slow
  </section >`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent {

@Input({required:true}) cssClass!:string;


  constructor() {
const start=Date.now();
while(Date.now() - start <3000){}
console.log('cargado')
}
}
