import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/types';
import { CartService } from '../cart.service';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showCategories: boolean = true;
  collections: Array<Collection>;
  constructor(
    public cart: CartService,
    private collectionService: CollectionsService
  ) {}
  ngOnInit(): void {
    this.collectionService.collectionsArray.subscribe(
      (res: Array<Collection>) => {
        this.collections = res;
      }
    );
  }

  toggleCategoriesView() {
    this.showCategories = !this.showCategories;
  }
}
