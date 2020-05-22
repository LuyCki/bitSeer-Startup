import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './localstorage.service';

interface RegisterModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginModel {
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpService, private localStorageService: LocalStorageService) { }

  public register(payload: RegisterModel) {
    this.http.post('auth/register', payload).subscribe(
      () => {},
      () => {},
      () => {
        const { email, password } = payload;
        const loginPayload = { email, password };

        this.login(loginPayload);
      }
    );
  }

  public login(payload: LoginModel) {
    this.http.post('auth/login', payload)
      .subscribe(response => {
        const payload = { key: 'token', value: response.access_token };
        const userPayload = { key: 'current_user', value: JSON.stringify(response.user) };

        this.localStorageService.add(payload);
        this.localStorageService.add(userPayload);

        this.currentUser.next(response.user);
      });
  }

  public isLogin() {
    const jwtToken = this.localStorageService.get('token');
    const currentUser: User = JSON.parse(this.localStorageService.get('current_user'));
    console.log(jwtToken);
    console.log(currentUser);

    if (jwtToken) {
      this.currentUser.next(currentUser);
    }
  }

  public logout() {
    this.localStorageService.remove('token');
    this.localStorageService.remove('current_user');
    this.currentUser.next(null);
  }
}
