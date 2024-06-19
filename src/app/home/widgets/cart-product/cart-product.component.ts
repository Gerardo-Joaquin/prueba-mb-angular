import { Component, Input } from '@angular/core';
import { SearchProduct } from '../../../models/search.model';
import { CartService } from '../../../services/home/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.scss'
})
export class CartProductComponent {

  @Input() item!: SearchProduct;
  constructor(
    private cartService: CartService,
  ) {}

  deleteCart(): void {
    this.cartService.removeProductFromCart(this.item.id)
  }

}
