import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CompanyDataService } from "../services/company-data.service";

@Component({
  selector: 'compare-modal',
  templateUrl: './compare-modal.component.html'
})
export class CompareModalComponent {
  filteredList = [];
  query: string = '';

  constructor(
    protected modalInstance: NgbActiveModal,
    private companyDataService: CompanyDataService
    ) {}

  confirm<T>(value: T): void {
    this.modalInstance.close(value);
  }

  cancel<T>(value: T | 'cancel' = 'cancel'): void {
    this.modalInstance.dismiss(value);
  }

  search(): void {
    this.companyDataService.getCompaniesFromSearchQuery(this.query)
      .then((res) => {
        this.filteredList = res;
      }, (err) => {
        console.error(err);
      });
  }
}
