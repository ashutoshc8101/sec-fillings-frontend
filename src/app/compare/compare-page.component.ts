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
      this.companyDataService.getCompanyDataFromCIK(cik1).then((res) => {
        this.companyData1 = res;
      }, (err) => { console.error(err) });
      this.companyDataService.getCompanyDataFromCIK(cik2).then((res) => {
        this.companyData2 = res;
      }, (err) => { console.error(err) });
    });
  }
}
