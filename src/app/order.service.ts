import { Injectable } from '@angular/core';
import { CustomerOwner, Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderData: Array<Product> = [
    {
      id: '1',
      title: 'Playstation 4',
      description: 'With PS4 gaming becomes a lot more powerfull',
      units: 6,
      price: 360,
      img: 'https://m.media-amazon.com/images/I/61OL2zIliML._AC_UY218_.jpg',
      available: true,
    },
    {
      id: '2',
      title: 'Pegasus 42 running shoes for men',
      description:
        'The nike pegasus turbo for men is the best shoe for sports in the market',
      units: 2,
      price: 56,
      img: 'https://m.media-amazon.com/images/I/61lZD+M16dL._AC_UL320_.jpg',
      available: true,
    },
    {
      id: '3',
      title: 'Men´s adidas kalis running shoe',
      description: 'Kalis running shoe for men and men only',
      units: 1,
      price: 84,
      img: 'https://m.media-amazon.com/images/I/81hu2KbtkxL._AC_UL320_.jpg',
      available: true,
    },
  ];
  orderTotal: number;
  customerData: CustomerOwner;
  constructor() {}
}
