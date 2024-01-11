import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product: any) {    
    
    var items: any = JSON.parse(sessionStorage.getItem('cart') || '{}') || [];
    
    items.push(product);
    console.log(items);

    sessionStorage.setItem('cart', JSON.stringify(items));
  }

  getItems(): any {
    return JSON.parse(sessionStorage.getItem('cart') || '') || [];
  }

  clearCart() {
    sessionStorage.removeItem('cart');
  }
}
