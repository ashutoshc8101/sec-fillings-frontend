import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CompareModalComponent } from "../modals/compare-modal.component";
import { AuthService } from "../services/auth.service";
import { CompanyDataService } from "../services/company-data.service";

@Component({
  selector: 'company-page',
  templateUrl: 'company-page.component.html'
})
export class CompanyPage {
  companyData;
  metricsData = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyDataService: CompanyDataService,
    private ngbModal: NgbModal,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        let cik = this.route.snapshot.paramMap.get('cik');
        this.companyDataService.getCompanyDataFromCIK(cik).then((resp) => {
          this.companyData = resp;
          for (let i = 0; i < this.companyData.metrics_data[0].length; i++) {
            let key = this.companyData.metrics_data[0][i].Metric_Type;
            if (!(key in this.metricsData)) {
              this.metricsData[key] = [];
            }
            this.metricsData[key].push(this.companyData.metrics_data[0][i]);
          }
        }, (error) => {
          console.error(error);
        });
      });
  }

  compare(): void {
    let modalRef = this.ngbModal.open(CompareModalComponent);
    modalRef.result.then((result) => {
      this.router.navigateByUrl('/compare/' + this.companyData.company_data[0].CIK_Number + '/' + result);
    }, () => {});
  }

  star(): void {
    this.http.post('http://localhost:8000/company/favourites/', {
      comp_cik: this.companyData.company_data[0].CIK_Number
    }, {
      headers: {
        Authorization: 'Token ' + this.authService.getToken()
      }
    }).toPromise().then(() => {
        this.ngOnInit();
    }, (err) => {
      console.error(err);
    });
  }

  unstar(): void {
    this.http.delete('http://localhost:8000/company/favourites/?comp_cik=' +
      this.companyData.company_data[0].CIK_Number, {
      headers: {
        Authorization: 'Token ' + this.authService.getToken()
      }}).toPromise().then((res) => {
        this.ngOnInit();
    }, (err) => {
      console.error(err);
    });
  }
}
