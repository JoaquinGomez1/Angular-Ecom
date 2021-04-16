import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/types';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  collections: Array<Collection>;
  constructor(private collectionService: CollectionsService) {}
  ngOnInit() {
    this.collectionService.collectionsArray.subscribe((res) => {
      this.collections = res;
    });

    console.log('from Categories', this.collectionService.collectionsArray);
  }
}
