import { Injectable, signal, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';
import { User, UserDataResponse } from '@interfaces/user-response';
import { UsersResponse } from '@interfaces/req-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: []
  })

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {

    this.http.get<UsersResponse>("https://reqres.in/api/users")
      .pipe(delay(1500))
      .subscribe(res => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      })

  }

  getUserById(id: string) {

    return this.http.get<UserDataResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1500),
      map(resp => resp.data)
    )
  }

}
