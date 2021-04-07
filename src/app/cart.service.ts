import { Injectable } from '@angular/core';
import { Product } from 'src/types';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Array<Product> = [];
  cartTotal: number = 0;
  constructor(private tostr: ToastrService) {}

  // Gives me full control on when data will change
  private setItems(items): void {
    this.items = items;
    this.cartTotal = this.getTotal();
  }

  addToCart(item: Product, units: number = 1): void {
    const indexOfItem = this.items.findIndex((each) => each.id === item.id);
    const itemsList = [...this.items];
    const itemExistsOnCart = indexOfItem !== -1;

    if (itemExistsOnCart) {
      this.addUnitToProduct(item);
    } else
      this.setItems([
        ...itemsList,
        { ...item, units, unitsInStock: item.units },
      ]);

    this.tostr.success('Product added successfully');
  }

  addUnitToProduct(item: Product): void {
    if (item.units >= item.unitsInStock) return; // Prevents to add beyond the limit
    const indexOfItem = this.items.findIndex((each) => each.id === item.id);
    const itemsList = [...this.items];

    itemsList[indexOfItem].units += 1;
    this.setItems([...itemsList]);
  }

  changeUnitOfProduct(item: Product, ammount: number = 1): void {
    const indexOfItem = this.items.findIndex((each) => each.id === item.id);
    const itemsList = [...this.items];
    const thisProduct = itemsList[indexOfItem];

    // only changes it if the number to change is available
    thisProduct.units =
      ammount <= thisProduct.unitsInStock ? ammount : thisProduct.units;
    this.setItems([...itemsList]);
  }

  clearCart(): void {
    this.items = [];
    this.tostr.success('Cart deleted succesfully');
  }

  deleteFromCart(id: string): void {
    const myItems = [...this.items];
    const indexOfItem = myItems.findIndex((each) => each.id === id);

    myItems.splice(indexOfItem, 1);
    this.setItems(myItems);
    this.tostr.success('Product deleted succesfully');
  }

  getTotal(): number {
    const total = this.items.reduce(
      (acc, { price, units }) => acc + price * units,
      0
    );
    return total;
  }
}
