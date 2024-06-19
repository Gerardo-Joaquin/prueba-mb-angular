import { Component } from '@angular/core';
import { CartService } from '../../../services/home/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  constructor(
    public cartService: CartService,
  ) {}

}
