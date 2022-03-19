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
  metricsData1 = {};
  metricsData2 = {};

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
        for (let i = 0; i < this.companyData1.metrics_data[0].length; i++) {
          let key = this.companyData1.metrics_data[0][i].Metric_Type;
          if (!(key in this.metricsData1)) {
            this.metricsData1[key] = [];
          }
          this.metricsData1[key].push(this.companyData1.metrics_data[0][i]);
        }
      }, (err) => { console.error(err) });
      this.companyDataService.getCompanyDataFromCIK(cik2).then((res) => {
        this.companyData2 = res;
        for (let i = 0; i < this.companyData2.metrics_data[0].length; i++) {
          let key = this.companyData2.metrics_data[0][i].Metric_Type;
          if (!(key in this.metricsData2)) {
            this.metricsData2[key] = [];
          }
          this.metricsData2[key].push(this.companyData2.metrics_data[0][i]);
        }
      }, (err) => { console.error(err) });
    });
  }
}
