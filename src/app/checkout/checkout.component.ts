import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../order.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ROOT } from 'src/localconfig';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
    private order: OrderService,
    private http: HttpClient
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

    if (this.cart.items.length <= 0) {
      this.router.navigate(['/']);
    }
  }

  placeOrder() {
    if (this.myForm.invalid || this.cart.orderPlaced) {
      this.tostr.error('Invalid Input or order already placed');
      return;
    }
    const orderData = this.formArray.map(({ name, values }) => ({
      name,
      value: values.value,
    }));
    const requestBody = {
      orderData,
      products: this.cart.items,
    };
    const FETCH_URL = BASE_ROOT + '/orders';

    const observerResponse = this.http.post(FETCH_URL, requestBody, {
      observe: 'response',
    });

    observerResponse.pipe(catchError((err) => of([]))).subscribe(
      (err) => this.tostr.error('Something went wrong'),
      (res) => {
        if (res.status < 300 && res.status >= 200) {
          this.cart.orderPlaced = true;
          this.tostr.success(
            'We will now proceed to validate your data',
            'Order accepted'
          );

          this.cart.items = [];
          this.order.orderData = this.cart.items;
          this.order.orderTotal = this.cart.cartTotal;
          this.order.customerData = this.myForm.value;
          this.router.navigate(['/order']);
          return;
        }
      }
    );
  }
}
