import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  loginView = true;
  registerView = false;
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService
  ) {}

  login(): void {
    if (this.email !== '' || this.password !== '') {
      this.authService.logIn(this.email, this.password);
    }
  }

  register(): void {
    if (this.email !== '' || this.password !== '' || this.username !== '') {
      this.authService.register(this.email, this.username, this.password);
    }
  }

  showRegisterView(): void {
    this.loginView = false;
    this.registerView = true;
  }

  showLoginView(): void {
    this.loginView = true;
    this.registerView = false;
  }
}
