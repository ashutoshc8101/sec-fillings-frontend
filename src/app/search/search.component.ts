import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { SearchService } from "../services/search.service";

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchTerm: string = '';

  results = [];
  mostViewed = [];

  constructor(
    private searchService: SearchService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.searchService.searchQueryUpdateEventEmitter.subscribe((query) => {
      this.searchTerm = query;
      this.getResults(query);
    });

    this.http.get<{ data: Object[] }>('http://localhost:8000/company/most_searched/').toPromise()
      .then((res) => {
        this.mostViewed = res.data;
      }, (error) => {
        console.error(error);
      });
  }

  search(): void {
    this.searchService.setSearchQuery(this.searchTerm);
  }

  getResults(query: string): void {
    this.http.get<Object[]>('http://localhost:8000/company/search/', {
      params: {
        search: query
      }
    }).toPromise().then((result) => {
      this.results = result;
    }, (error) => {
      console.error(error);
    });
  }
}
