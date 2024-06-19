import { Component, OnInit } from '@angular/core';
import { LandingService } from '../services/home/landing.service';
import { Offer, Product } from '../models/landing.models';
import { forkJoin } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  categories = [
    {
      title: 'Llantas',
      image: 'assets/images/llanta.png'
    },
    {
      title: 'Frenos',
      image: 'assets/images/freno.png'
    },
    {
      title: 'Rines',
      image: 'assets/images/rin.png'
    },
    {
      title: 'Baterías',
      image: 'assets/images/pila.png'
    },
    {
      title: 'Asientos',
      image: 'assets/images/asientos.png'
    },
  ]
  shopping = [
    'assets/images/emp1.png',
    'assets/images/emp2.png',
    'assets/images/emp3.png',
    'assets/images/emp4.png',
    'assets/images/emp1.png',
  ]
  offers!: Offer[];
  lastProducts!: Product[]

  constructor (
    private landingService: LandingService,
    public loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.loadingService.setLoading(true)
    forkJoin({
      offers: this.landingService.getOffers(),
      products: this.landingService.getLastProducts()
    }).subscribe(data => {
      this.offers = data.offers.content;
      this.lastProducts = data.products.content;
    }).add(() => this.loadingService.setLoading(false))
  }

}
