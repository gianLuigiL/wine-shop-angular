import { Injectable } from '@angular/core';

//Services
import { HttpClient } from '@angular/common/http';
import { DbApiService } from './db-api.service';

//Interfaces
import { Observable } from 'rxjs';
import { Drink } from '../interfaces/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  drinkObservable: Observable<Drink[]>;

  constructor(
    private http: HttpClient,
    private dbApi: DbApiService
  ) { }

  getAllDrinks(): Observable<Array<Drink>> {
    this.drinkObservable = this.http.get<Array<Drink>>(this.dbApi.url + 'drinks');
    return this.getDrinkObservable();
  }

  getDrinkObservable(){
    return this.drinkObservable;
  }
}
