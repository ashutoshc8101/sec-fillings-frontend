import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {
  companyData = [{
      cik: '2323',
      name: 'Zoom Communications',
      ticket: '1290283',
    },
    {
      cik: '678677',
      name: 'Dominos',
      ticket: '12123'
    }];

  getCompanyDataFromCIK(cik: string) {
    return this.companyData.find(obj => obj.cik === cik);
  }

  getCompaniesFromSearchQuery(query: string): Object[] {
    if (!query) {
      return [];
    }

    let filteredList = this.companyData.filter((result) => {
      return result.name.toLowerCase().search(query.toLowerCase()) > -1;
    });
    return filteredList;
  }
}
