import { Injectable } from '@angular/core';
import { SearchProduct } from '../../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCookieName = 'shoppingCart';

  constructor() { }

  addProductToCart(product: SearchProduct): void {
    let cart = this.getCart();
    cart.push(product);
    this.setCart(cart);
  }

  removeProductFromCart(productId: number): void {
    let cart = this.getCart();
    cart = cart.filter(product => product.id !== productId);
    this.setCart(cart);
  }

  getCart(): any[] {
    let cart = this.getCookie(this.cartCookieName);
    return cart ? JSON.parse(cart) : [];
  }

  getTotalPrice(): number {
    let cart = this.getCart();
    return cart.reduce((total, product) => total + product.precio, 0);
  }
  setCart(cart: any[]): void {
    this.setCookie(this.cartCookieName, JSON.stringify(cart), 7); // La cookie expirará en 7 días
  }

  private setCookie(name: string, value: string, days: number): void {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  private getCookie(name: string): string | null {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
