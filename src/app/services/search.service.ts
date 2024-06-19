import { Injectable } from '@angular/core';

import { SearchProduct, SearchResult } from '../models/search.model';
import { HttpClient } from '@angular/common/http';
import { SettingService } from './setting.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchResult: SearchProduct[] = []
  private searchTerm: string = '';
  private searchCar: string = '';
  private searchCategory: string = '';
  private searchCount: number = 0;

  constructor(
    private http: HttpClient,
    private settings: SettingService,
  ) { }

  setSearchCategory(value: string) {
    this.searchCategory = value;
  }

  setSearchVehicle(value: string) {
    this.searchCar = value;
  }

  getSearchCount(): number {
    return this.searchCount;
  }
  setSearchCount(count: number): void {
    this.searchCount = count;
  }
  getSearchTerm(): string {
    return this.searchTerm;
  }
  setSearchTerm(term: string): void {
    this.searchTerm = term
  }
  getSearchResult(): SearchProduct[]  {
    return this.searchResult
  }

  setSearchResult(res: SearchProduct[]): void {
    this.searchResult = res;
  } 

  searchProduct(page: number = 1, car: string= ''): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.settings.ENDPOINT}/searchAutoparteV3/?search=${this.searchTerm}&limit=20&page=${page}&categoriaSeleccionada=${this.searchCategory}&marcasSeleccionadas=${this.searchCar}&vehiculo=${car}`)
  }

  
}
