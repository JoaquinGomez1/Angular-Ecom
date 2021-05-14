import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BASE_ROOT } from 'src/localconfig';
import { Product } from 'src/types';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  routeId: string;
  product: Product | undefined; // Allow undefined values in case product is not defined
  response: Observable<any>;
  isPageLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    public cart: CartService,
    private http: HttpClient
  ) {
    this.route.params.subscribe(() => this.fetchData());
  }

  ngOnInit(): void {}

  fetchData() {
    this.routeId = this.route.snapshot.params['id'];

    this.response = this.http.get(BASE_ROOT + `/products/${this.routeId}`);

    // Set products as the result of the observable;
    this.response.subscribe((res) => {
      this.product = res;
      // Change the values since the units in the DB are the unitsInStock
      this.product.unitsInStock = this.product.units;
      this.product.units = 1;
    });
  }

  setNumberOfUnits(qty: number): void {
    // For some reason some times qty will be a number string (i.e. "2")
    // So to compensate for that we will parse it back into a string
    if (typeof qty === 'string') {
      try {
        if (this.product) this.product.units = parseInt(qty);
      } catch (err) {
        console.log(err);
      }
    } else if (this.product) this.product.units = qty;
  }
}
