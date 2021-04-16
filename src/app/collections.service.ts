import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  collectionsArray: Observable<any>;
  constructor() {}
}
