import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'page-change-detection',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
  <shared-title [title]="currentFramework()"></shared-title>

  <pre>{{frameworkAsSignal() | json}} </pre>
  <pre>{{frameworkAsProperty | json}}</pre>

  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: "Angular",
    releaseDate: 2016
  });
  public frameworkAsProperty = {
    name: "Angular",
    releaseDate: 2016
  };

  public currentFramework=computed(
    ()=>`Change detection -${this.frameworkAsSignal().name}`
  )
  constructor() {
    setTimeout(() => {

     // this.frameworkAsProperty.name= 'React' ;
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))

    }, 3000)
  }

}
