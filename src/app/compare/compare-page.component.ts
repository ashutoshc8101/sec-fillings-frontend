import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CompanyDataService } from "../services/company-data.service";

@Component({
  selector: 'compare-page',
  templateUrl: './compare-page.component.html'
})
export class ComparePageComponent {
  companyData1;
  companyData2;

  constructor(
    private route: ActivatedRoute,
    private companyDataService: CompanyDataService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let cik1 = this.route.snapshot.paramMap.get('cik1');
      let cik2 = this.route.snapshot.paramMap.get('cik2');
      this.companyData1 = this.companyDataService.getCompanyDataFromCIK(cik1);
      this.companyData2 = this.companyDataService.getCompanyDataFromCIK(cik2);
    });
  }
}
