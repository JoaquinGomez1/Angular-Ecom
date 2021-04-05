import { Component, OnInit } from '@angular/core';
import { Product } from '../../types';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
})
export class NewProductsComponent implements OnInit {
  productsList: Array<Product> = [
    {
      id: '1',
      title: 'Playstation 4',
      description: 'With PS4 gaming becomes a lot more powerfull',
      units: 8,
      price: 360,
      img: 'https://m.media-amazon.com/images/I/61OL2zIliML._AC_UY218_.jpg',
      available: true,
    },
    {
      id: '2',
      title: 'Pegasus 42 running shoes for men',
      description:
        'The nike pegasus turbo for men is the best shoe for sports in the market',
      units: 4,
      price: 56,
      img: 'https://m.media-amazon.com/images/I/61lZD+M16dL._AC_UL320_.jpg',
      available: true,
    },
    {
      id: '3',
      title: 'Men´s adidas kalis running shoe',
      description: 'Kalis running shoe for men and men only',
      units: 3,
      price: 84,
      img: 'https://m.media-amazon.com/images/I/81hu2KbtkxL._AC_UL320_.jpg',
      available: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
