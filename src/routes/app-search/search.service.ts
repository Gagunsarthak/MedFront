import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearch } from './search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearchData() {
    return this.http
      .get<any>('/assets/search-data.json')
      .toPromise()
      .then((res) => <ISearch[]>res.searchData)
      .then((searchData) => {
        return searchData;
      });
  }
}
