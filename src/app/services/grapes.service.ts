import { Injectable } from '@angular/core';

//Services
import { HttpClient } from '@angular/common/http';
import { DbApiService } from './db-api.service';

//Interfaces
import { Observable } from 'rxjs';
import { Grape } from '../interfaces/grape';

@Injectable({
  providedIn: 'root'
})
export class GrapesService {

  constructor(
    private http: HttpClient,
    private dbApi: DbApiService
  ) { }

  getAllGrapes(): Observable<Array<Grape>> {
    return this.http.get<Array<Grape>>(this.dbApi.url + 'regions');
  }

}
