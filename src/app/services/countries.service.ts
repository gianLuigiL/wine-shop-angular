import { Injectable } from '@angular/core';

//Services
import { HttpClient } from '@angular/common/http';
import { DbApiService } from './db-api.service';

//Interfaces
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient,
    private dbApi: DbApiService
  ) { }

  getAllCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.dbApi.url + 'countries');
  }
}
