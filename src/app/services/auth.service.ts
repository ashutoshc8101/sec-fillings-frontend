import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authChangedEventEmitter = new EventEmitter<boolean>();

  logIn(): void {
    localStorage.setItem('loggedIn', '' + true);
    this._authChangedEventEmitter.emit(true);
  }

  logOut(): void {
    localStorage.setItem('loggedIn', '' + false);
    this._authChangedEventEmitter.emit(false);
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  get authChangedEventEmitter(): EventEmitter<boolean> {
    return this._authChangedEventEmitter;
  }
}
