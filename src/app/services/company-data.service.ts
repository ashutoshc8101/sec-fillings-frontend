import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getCompanyDataFromCIK(cik: string): Promise<Object | null> {
    return this.http.get('http://localhost:8000/company/company/?comp_cik=' + cik, {
      headers: {
        Authorization: 'Token ' + this.authService.getToken()
      },

    }).toPromise()
      .then((resp) => {
        return resp;
      }, (err) => {
        console.error(err);
        return null;
      });
  }

  getCompaniesFromSearchQuery(query: string): Promise<Object[] | null> {
    if (!query) {
      return null;
    }

    return this.http.get<Object[]>('http://localhost:8000/company/search/', {
      params: {
        search: query
      }
    }).toPromise().then((result) => {
      return result;
    }, (error) => {
      console.error(error);
      return null;
    });
  }
}
