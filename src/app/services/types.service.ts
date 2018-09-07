import { Injectable } from '@angular/core';

//Services
import { HttpClient } from '@angular/common/http';
import { DbApiService } from './db-api.service';

//Interfaces
import { Observable } from 'rxjs';
import { Type } from '../interfaces/type';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(
    private http: HttpClient,
    private dbApi: DbApiService
  ) { }

  getAllTypes(): Observable<Array<Type>> {
    return this.http.get<Array<Type>>(this.dbApi.url + 'types');
  }
}
