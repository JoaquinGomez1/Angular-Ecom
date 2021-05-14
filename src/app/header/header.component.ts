import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/types';
import { CartService } from '../cart.service';
import { CollectionsService } from '../collections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showCategories: boolean = false;
  collections: Array<Collection>;
  searchValue: string;

  constructor(
    public cart: CartService,
    private collectionService: CollectionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.collectionService.collectionsArray.subscribe(
      (res: Array<Collection>) => {
        this.collections = res;
      }
    );
  }

  setSearchValue(event) {
    const { key, target } = event;
    this.searchValue = target.value;
    if (key === 'Enter') {
      this.searchProduct();
      return;
    }
  }

  toggleCategoriesView(event): void {
    this.showCategories = !this.showCategories;
  }

  searchProduct() {
    if (!this.searchValue) return;
    const fetchUrl = `/products`;
    this.router.navigate([fetchUrl], {
      queryParams: { product: this.searchValue },
    });
  }
}
