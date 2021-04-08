import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  myForm: FormGroup;
  formArray: Array<any>;

  constructor(
    public cart: CartService,
    private router: Router,
    private formGroup: FormBuilder,
    private tostr: ToastrService,
    private order: OrderService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formGroup.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [Validators.required, Validators.minLength(4), Validators.email],
      ],
      address: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      zipCode: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10), // According to zip code standars
        ],
      ],
    });

    // Will map trough this object in the html template
    const keyValues = Object.entries(this.myForm.controls);
    this.formArray = keyValues.map(([key, values]) => ({
      name: key,
      values,
    }));

    // this.myForm.valueChanges.subscribe(() =>
    //   console.log(JSON.stringify(this.myForm.value, null, 2))
    // );
    if (this.cart.items.length <= 0) {
      this.router.navigate(['/']);
    }
  }

  placeOrder() {
    if (this.myForm.invalid || this.cart.orderPlaced) {
      this.tostr.error('Invalid Input or order already placed');
      return;
    }

    this.cart.orderPlaced = true;
    this.tostr.success(
      'We will now proceed to validate your data',
      'Order accepted'
    );
    this.order.orderData = this.cart.items;
    this.order.orderTotal = this.cart.cartTotal;
    this.order.customerData = this.myForm.value;
    this.router.navigate(['/order']);
  }
}
