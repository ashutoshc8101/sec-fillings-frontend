import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;
  private _authChangedEventEmitter = new EventEmitter<boolean>();

  logIn(): void {
    this._isLoggedIn = true;
    this._authChangedEventEmitter.emit(this._isLoggedIn);
  }

  logOut(): void {
    this._isLoggedIn = false;
    this._authChangedEventEmitter.emit(this._isLoggedIn);
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get authChangedEventEmitter(): EventEmitter<boolean> {
    return this._authChangedEventEmitter;
  }
}
