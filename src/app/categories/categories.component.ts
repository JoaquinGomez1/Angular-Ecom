import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})

// [
//   {
//     id: 1,
//     name: 'Laptop',
//     img:
//       'https://www.muycomputerpro.com/wp-content/uploads/2019/11/Laptop3.jpg',
//     available: true,
//   },
//   {
//     id: 2,
//     name: 'Accesories',
//     img:
//       'https://target.scene7.com/is/image/Target/GUEST_0da5bfbf-62c0-450f-9036-7f42972c5adc?wid=488&hei=488&fmt=pjpeg',
//     available: true,
//   },
//   {
//     id: 3,
//     name: 'Cameras',
//     img:
//       'https://image.freepik.com/free-photo/professional-camera-white-background_23-2147717334.jpg',
//     available: true,
//   },
//   {
//     id: 4,
//     name: 'Microphones',
//     img:
//       'https://media.sweetwater.com/images/items/750/NT1Kit-large.jpg?v=349e65dd8501e480',
//     available: true,
//   },
//   {
//     id: 5,
//     name: 'Controllers',
//     img:
//       'https://http2.mlstatic.com/D_NQ_NP_863845-MLA45045608183_032021-O.jpg',
//     available: true,
//   },
//   {
//     id: 6,
//     name: 'Phones',
//     img:
//       'https://i.blogs.es/6a3546/captura-de-pantalla-2020-10-15-a-las-14.23.00/450_1000.jpg',
//     available: true,
//   },
// ]
export class CategoriesComponent implements OnInit {
  readonly ROOT_URL = 'https://localhost:44353/';
  categories: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.categories = this.http.get(this.ROOT_URL + 'api/collections');
  }
}
