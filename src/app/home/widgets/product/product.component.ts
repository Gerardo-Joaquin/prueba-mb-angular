import { Component, Input } from '@angular/core';
import { SearchProduct } from '../../../models/search.model';
import { CartService } from '../../../services/home/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() item!: SearchProduct;


  constructor(
    private cartService: CartService,
  ) {}

  addCartShopping(): void {
    this.cartService.addProductToCart(this.item);
  }
}
