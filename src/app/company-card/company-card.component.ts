import { Component, Input } from "@angular/core";

@Component({
  selector: 'company-card',
  templateUrl: './company-card.component.html'
})
export class CompanyCardComponent {
  @Input() companyName: string;
  @Input() cik: string;
}
