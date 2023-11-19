import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1 class="text-3xl mb-5 text-purple-950">{{ title | titlecase }} </h1>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {

  @Input({ required: true }) title!: string;

  //De esta manera se reciben como true el hecho de exista un atributo en el elemento
  //@Input({transform:booleanAttribute}) withShadow:boolean=false;

}
