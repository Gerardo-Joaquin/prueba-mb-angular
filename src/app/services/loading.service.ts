import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading: boolean = false;
  constructor() { }


  getLoading(): boolean {
    return this.loading;
  }

  setLoading(value: boolean): void {
    this.loading = value;
  }
}
