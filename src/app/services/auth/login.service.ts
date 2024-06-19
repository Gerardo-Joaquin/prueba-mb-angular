import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingService } from '../setting.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private settings: SettingService,
  ) { }


  signIn(body: any): Observable<any> {
    return this.http.post(`${this.settings.ENDPOINT}/auth`, body);
  }
  create(body: any): Observable<any> {
    return this.http.post(`${this.settings.ENDPOINT}/crearVendedor`, body)
  }
}
