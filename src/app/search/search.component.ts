import { Component } from "@angular/core";
import { SearchService } from "../services/search.service";

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchTerm: string = '';

  results = [];
  recentSearches = [];

  companyData = [
    {
      name: 'Zoom',
      cik: '2323',
      ticket: '29323'
    },
    {
      name: 'Dominos',
      cik: '678677',
      ticket: '12312'
    }
  ];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.searchQueryUpdateEventEmitter.subscribe((query) => {
      this.searchTerm = query;
      this.getResults(query);
    });
  }

  search(): void {
    this.searchService.setSearchQuery(this.searchTerm);
  }

  getResults(query: string): void {
    this.results = this.companyData.filter((result) => {
      return result.name.toLowerCase().search(query.toLowerCase()) > -1;
    });
  }
}
