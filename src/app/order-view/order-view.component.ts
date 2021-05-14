import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss'],
})
export class OrderViewComponent implements OnInit {
  orderPlaced: boolean = false;
  constructor(
    private cart: CartService,
    private router: Router,
    public order: OrderService
  ) {}

  ngOnInit(): void {
    console.log('From order view', this.order.orderTotal);
    this.orderPlaced = this.cart.orderPlaced;
    if (!this.cart.orderPlaced) {
      this.router.navigate(['/']);
    } else {
      this.orderPlaced = false; // <-- Once viewed the user cannot come back to this page
    }
  }
}
