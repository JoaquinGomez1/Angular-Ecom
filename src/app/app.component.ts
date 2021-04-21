import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionsService } from './collections.service';
import { BASE_ROOT } from '../localconfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  categories: Observable<any>;
  isPetitionLoading: boolean = true;
  title: string = 'Angular Ecommerce';

  constructor(
    private http: HttpClient,
    private collectionService: CollectionsService
  ) {}

  ngOnInit(): void {
    this.categories = this.http.get(BASE_ROOT + '/collections');
    this.collectionService.collectionsArray = this.categories;
  }
}
