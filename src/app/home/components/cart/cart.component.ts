import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/home/cart.service';
import { Product } from '../../../models/landing.models';
import { LandingService } from '../../../services/home/landing.service';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  lastProducts!: Product[]
  constructor(
    public cartService: CartService,
    private landingService: LandingService,
    public loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.lastProducts = []
    this.loadingService.setLoading(true)
    this.landingService.getLastProducts().subscribe(data => {
      this.lastProducts = data.content
    }).add(() => this.loadingService.setLoading(false))
  }


}
