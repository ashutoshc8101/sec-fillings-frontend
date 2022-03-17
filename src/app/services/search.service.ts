import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query: string = '';
  searchQueryUpdateEventEmitter = new EventEmitter<string>();

  setSearchQuery(query: string): void {
    this.query = query;
    this.searchQueryUpdateEventEmitter.emit(this.query);
  }
}
