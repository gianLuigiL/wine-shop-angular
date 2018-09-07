import { Injectable } from '@angular/core';

//Services
import { HttpClient } from '@angular/common/http';
import { DbApiService } from './db-api.service';

//Interfaces
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private dbApi: DbApiService
  ) { }

  getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.dbApi.url + 'categories');
  }
}
