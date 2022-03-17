import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CompanyDataService } from "../services/company-data.service";

@Component({
  selector: 'company-page',
  templateUrl: 'company-page.component.html'
})
export class CompanyPage {
  companyData;

  constructor(
    private route: ActivatedRoute,
    private companyDataService: CompanyDataService
  ) {}

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        let cik = this.route.snapshot.paramMap.get('cik');
        this.companyData = this.companyDataService.getCompanyDataFromCIK(cik);
      });
  }
}
