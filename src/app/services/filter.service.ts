import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingService } from './setting.service';
import { Observable } from 'rxjs';
import { CategoryRes, VehiclesRes } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private http: HttpClient,
    private settings: SettingService,
  ) { }

  getCategories(): Observable<CategoryRes> {
    return this.http.get<CategoryRes>(`${this.settings.ENDPOINT}/getSubsubcategorias`)
  }
  getVehicles(): Observable<VehiclesRes> {
    return this.http.get<VehiclesRes>(`${this.settings.ENDPOINT}/getMarcasVehiculos`)
  }
}
