import { Injectable } from '@angular/core';
import { CustomerOwner, Order, Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderData: Array<Product>;
  orderTotal: number;
  customerData: Order;
  constructor() {}
}
