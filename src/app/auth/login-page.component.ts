import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  loginView = true;
  registerView = false;

  constructor(
    private authService: AuthService
  ) {}

  login(): void {
    this.authService.logIn();
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
