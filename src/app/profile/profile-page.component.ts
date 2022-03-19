import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

interface User {
  username: string;
  email: string;
}

@Component({
  selector: 'profile-page',
  templateUrl: 'profile-page.component.html'
})
export class ProfilePageComponent {
  user: User = {
    username: '',
    email: ''
  };

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().then((res) => {
      this.user = res.data;
    }, (err) => {
      console.error(err);
    });
  }
}
