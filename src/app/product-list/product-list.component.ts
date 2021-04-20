import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BASE_ROOT } from 'src/localconfig';
import { Product } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsList: Array<Product>;
  isPageLoading: boolean;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.queryParams.subscribe(() => this.fetchData()); // Will force data to be fetched again on paramquery change
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.isPageLoading = true;
    let fetchUrl = '';

    const { product, collection } = this.route.snapshot.queryParams;
    // Only allow for one param at a time for now
    if (product) fetchUrl = `/products?product=${product}`;
    if (collection) fetchUrl = `/products?collection=${collection}`;

    const data: Observable<any> = this.http.get(BASE_ROOT + fetchUrl);
    data.subscribe((data: Array<Product>) => {
      this.productsList = data;
      this.isPageLoading = false;
    });
  }
}
