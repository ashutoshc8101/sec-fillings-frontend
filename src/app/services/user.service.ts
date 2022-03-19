import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

interface User {
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getUser(): Promise<{data: User} | null> {
    return this.http.get<{ data: User }>('http://localhost:8000/login/UserData/', {
      headers: {
        Authorization: 'Token ' + this.authService.getToken()
      }
    }).toPromise().then((res) => {
      return res;
    }, (err) => {
      return null;
    });
  }
}
