import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {
  @Input() collection: {
    id: number;
    name: string;
    img: string | undefined;
    available: boolean;
  };
  constructor() {}

  ngOnInit(): void {
    console.log(this.collection);
  }
}
