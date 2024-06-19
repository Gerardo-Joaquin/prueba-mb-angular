import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingService } from '../setting.service';
import { Observable } from 'rxjs';
import { Offers, Products } from '../../models/landing.models';
import { SearchResult } from '../../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private http: HttpClient,
    private settings: SettingService,
  ) { }

  getOffers(): Observable<Offers> {
    return this.http.get<Offers>(`${this.settings.ENDPOINT}/getProductosOferta`)
  }
  getLastProducts(): Observable<Products> {
    return this.http.get<Products>(`${this.settings.ENDPOINT}/getProductosUltimaVisita`);
  }

}
