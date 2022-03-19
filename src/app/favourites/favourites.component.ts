import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html'
})
export class FavouritesComponent {
  favourites = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.getToken !== null) {
      this.http.get<{ data: Object[] }>('http://localhost:8000/company/favourites/', {
        headers: {
          Authorization: 'Token ' + this.authService.getToken()
        }
      }).toPromise().then((resp) => {
        this.favourites = resp.data;
      }, (error) => {
        console.error(error);
      })
    }
  }
}
