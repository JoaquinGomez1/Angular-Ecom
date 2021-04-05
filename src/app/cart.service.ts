import { Injectable } from '@angular/core';
import { Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Array<Product> = [];
  constructor() {}

  addToCart(item: Product): void {
    const indexOfItem = this.items.findIndex((each) => each.id === item.id);

    if (indexOfItem !== -1) this.items[indexOfItem].units += 1;
    else this.items.push({ ...item, units: 1 });
  }

  clearCart(): void {
    this.items = [];
  }

  deleteFromCart(id: string): void {
    const indexOfItem = this.items.findIndex((each) => each.id === id);
    this.items.splice(indexOfItem, 1);
  }
}
