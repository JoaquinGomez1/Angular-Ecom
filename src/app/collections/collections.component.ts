import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/types';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  collectionList: Array<Collection>;

  constructor(private collectionService: CollectionsService) {}

  ngOnInit(): void {
    this.collectionService.collectionsArray.subscribe(
      (data: Array<Collection>) => {
        const maxNumberOfCollections = 3;
        this.collectionList = data.slice(0, maxNumberOfCollections);
      }
    );
  }
}
