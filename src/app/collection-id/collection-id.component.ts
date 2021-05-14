import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_ROOT } from 'src/localconfig';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/types';

@Component({
  selector: 'app-collection-id',
  templateUrl: './collection-id.component.html',
  styleUrls: ['./collection-id.component.scss'],
})
export class CollectionIdComponent implements OnInit {
  routeId: Number;
  productsList: Array<Product>;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(() => this.fetchData());
  }

  ngOnInit(): void {}

  fetchData() {
    this.routeId = this.route.snapshot.params['id'];
    this.http
      .get(BASE_ROOT + `/collections/${this.routeId}`)
      .subscribe((data: Array<Product>) => (this.productsList = data));
  }
}
