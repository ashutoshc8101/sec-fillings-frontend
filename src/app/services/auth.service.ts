import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authChangedEventEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient
  ) {}

  getToken(): string | null {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }

    return null;
  }

  logIn(email: string, password: string): void {
    this.http.post('http://localhost:8000/login/login/', {
      username: email,
      password: password
    }).toPromise().then((res: { token: string }) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('loggedIn', '' + true);
      this._authChangedEventEmitter.emit(true);
    }, (error) => {
      console.error(error);
    });
  }

  register(email: string, username: string, password: string) {
    this.http.post<{ registered: boolean, token: string }>(
      'http://localhost:8000/login/register/', {
        email,
        username,
        password
    }).toPromise().then((result) => {
      if (result.registered) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('loggedIn', '' + true);
        this._authChangedEventEmitter.emit(true);
      }
    }, (error) => {
      console.error(error);
    });
  }

  logOut(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('loggedIn', '' + false);
    this._authChangedEventEmitter.emit(false);
  }

  get isLoggedIn(): boolean {
    if (!localStorage.getItem('loggedIn')) return false;

    return localStorage.getItem('loggedIn') === 'true';
  }

  get authChangedEventEmitter(): EventEmitter<boolean> {
    return this._authChangedEventEmitter;
  }
}
