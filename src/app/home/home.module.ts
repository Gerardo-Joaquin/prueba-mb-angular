import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OfferComponent } from './widgets/offer/offer.component';
import { CategoryComponent } from './widgets/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './widgets/product/product.component';
import { CartProductComponent } from './widgets/cart-product/cart-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    PaymentComponent,
    CartComponent,
    OfferComponent,
    CategoryComponent,
    SearchComponent,
    ProductComponent,
    CartProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
