import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';
import { User,UserDataResponse } from '@interfaces/user-response';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `
  <shared-title title="User"></shared-title>

  @if( user()){
    <section>
      <img
      [srcset]="user()!.avatar"
      [alt]="user()!.first_name"  >
    </section>

    <div>
      <h3>{{fullname()}}</h3>
      <p>{{user()!.email}}</p>
    </div>

  } @else {
   <p>Cargando...</p>
  }
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);

  private usersService = inject(UsersService);

  public fullname=computed(()=>{
    return `${this.user()?.first_name} ${this.user()?.last_name}`
  })

  public user = toSignal<User>(
    this.route.params.pipe(
      switchMap(params => this.usersService.getUserById(params['id']))
    )
  )

  // constructor(){
  //   this.route.params.subscribe(params=>{
  //     console.log(params['id'])
  //   })
  // }
}
