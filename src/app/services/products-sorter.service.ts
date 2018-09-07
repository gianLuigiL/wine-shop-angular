import { Injectable } from '@angular/core';

//RXJS
import { BehaviorSubject } from 'rxjs';

//Interfaces
import { Drink } from '../interfaces/drink';

@Injectable({
  providedIn: 'root'
})
export class ProductsSorterService {

  public sorted: BehaviorSubject<Array<Drink>> = new BehaviorSubject<Array<Drink>>([]);
  private allItems: Drink[];

  constructor() { }

  initialize(allItems: Drink[]){
    this.allItems = allItems;
    this.sort('price');
    return this.sorted.asObservable();
  }

  sort(order){
    switch(order){
      case 'AZ':
      this.allItems.sort( (a,b)=> {
        if(a.name[0] < b.name[0]){
          return -1;
        } else if (a.name[0] > b.name[0]) {
          return 1;
        } else {
          return 0;
        }
      } );
      break;
      case 'ZA':
      this.allItems.sort( (a,b)=> {
        if(a.name[0] < b.name[0]){
          return 1;
        } else if (a.name[0] > b.name[0]) {
          return -1;
        } else {
          return 0;
        }
      } );
      break;
      case 'price':
      this.allItems.sort( (a,b)=> a.price - b.price )
      break;
      case 'price_reverse':
      this.allItems.sort( (a,b)=> b.price - a.price )
      break;
      case 'rating':
      this.allItems.sort( (a,b)=> (b.reviews[0] || 0) - ( a.reviews[0] || 0) )
      break;
    }
    console.log(this.allItems)
    this.sorted.next(this.allItems);
  }
}
