import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/types';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  routeId: string;
  units: number = 1;
  unitsInStock: number = 8;
  product: Product = {
    id: '1',
    title: 'Playstation 4',
    description: 'With PS4 gaming becomes a lot more powerfull',
    units: this.units,
    unitsInStock: this.unitsInStock,
    price: 360,
    img: 'https://m.media-amazon.com/images/I/61OL2zIliML._AC_UY218_.jpg',
    available: true,
  };

  constructor(private route: ActivatedRoute, public cart: CartService) {}
  ngOnInit(): void {
    this.routeId = this.route.snapshot.params['id'];
  }

  setNumberOfUnits(qty: number): void {
    console.log(qty);
    this.product.units = qty;
  }
}
