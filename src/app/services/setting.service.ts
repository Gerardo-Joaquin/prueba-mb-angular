import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public readonly ENDPOINT = 'https://prueba.sandboxmb.com/api'
  constructor() { }

}
