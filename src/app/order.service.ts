import { Injectable } from '@angular/core';
import { CustomerOwner, Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderData: Array<Product>;
  orderTotal: number;
  customerData: CustomerOwner;
  constructor() {}
}
