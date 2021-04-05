import { Injectable } from '@angular/core';
import { Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Array<Product> = [];
  cartTotal: number = 0;
  constructor() {}

  // Gives me full control on when data will change
  setItems(items): void {
    this.items = items;
    this.cartTotal = this.getTotal();
  }

  addToCart(item: Product): void {
    const indexOfItem = this.items.findIndex((each) => each.id === item.id);
    const itemsList = [...this.items];
    const itemExistsOnCart = indexOfItem !== -1;

    if (itemExistsOnCart) {
      this.addUnitToProduct(item);
    } else
      this.setItems([
        ...itemsList,
        { ...item, units: 1, unitsInStock: item.units },
      ]);
  }

  addUnitToProduct(item: Product, ammount: number = 1): void {
    const indexOfItem = this.items.findIndex((each) => each.id === item.id);
    const itemsList = [...this.items];

    itemsList[indexOfItem].units += ammount;
    this.setItems([...itemsList]);
  }

  clearCart(): void {
    this.items = [];
  }

  deleteFromCart(id: string): void {
    const myItems = [...this.items];
    const indexOfItem = myItems.findIndex((each) => each.id === id);

    myItems.splice(indexOfItem, 1);
    this.setItems(myItems);
  }

  getTotal(): number {
    const total = this.items.reduce(
      (acc, { price, units }) => acc + price * units,
      0
    );
    return total;
  }
}
