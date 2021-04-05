import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/types';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  routeId: string;
  product: Product = {
    id: '1',
    title: 'Playstation 4',
    description: 'With PS4 gaming becomes a lot more powerfull',
    units: 8,
    price: 360,
    img: 'https://m.media-amazon.com/images/I/61OL2zIliML._AC_UY218_.jpg',
    available: true,
  };

  constructor(private route: ActivatedRoute, private cart: CartService) {}
  ngOnInit(): void {
    this.routeId = this.route.snapshot.params['id'];
  }

  addToCart(product) {
    this.cart.addToCart(product);
  }
}
