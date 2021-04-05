import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  collectionList: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      img:
        'https://www.muycomputerpro.com/wp-content/uploads/2019/11/Laptop3.jpg',
      available: true,
    },
    {
      id: 2,
      name: 'Accesories',
      img:
        'https://target.scene7.com/is/image/Target/GUEST_0da5bfbf-62c0-450f-9036-7f42972c5adc?wid=488&hei=488&fmt=pjpeg',
      available: true,
    },
    {
      id: 3,
      name: 'Cameras',
      img:
        'https://image.freepik.com/free-photo/professional-camera-white-background_23-2147717334.jpg',
      available: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
