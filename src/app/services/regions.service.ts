import { Injectable } from '@angular/core';

//Services
import { HttpClient } from '@angular/common/http';
import { DbApiService } from './db-api.service';

//Interfaces
import { Observable } from 'rxjs';
import { Region } from '../interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(
    private http: HttpClient,
    private dbApi: DbApiService
  ) { }

  getAllRegions(): Observable<Array<Region>> {
    return this.http.get<Array<Region>>(this.dbApi.url + 'regions');
  }

}
