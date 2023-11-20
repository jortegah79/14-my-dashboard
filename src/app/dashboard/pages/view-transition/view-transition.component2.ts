import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition2',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template:`
  <shared-title title="view transition 2"></shared-title>

  <section class="flex justify-end">
<img srcset="https://picsum.photos/id/237/200/300"
  alt="picsum"
  width="200"
  height="300"
  style="view-transition-name:hero1"
  >

  <div class="fixed bottom-16 rounded bg-blue-800 w-32 h-32"
  style="view-transition-name:hero2"></div>

  </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent2 { }
