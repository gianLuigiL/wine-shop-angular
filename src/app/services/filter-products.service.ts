//Decorators
import { Injectable } from '@angular/core';

//Interfaces
import { Drink } from '../interfaces/drink';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {

  constructor() { }

  filter(toFilter: Drink[], filter: string, name: string): Drink[] {

    let results: Drink[] = [];

    switch(filter){
      case 'category':
        results = toFilter.filter(el => el.category.name === name );
      break;
      case 'country':
        results = toFilter.filter(el => el.country.name === name );
      break;
      case 'region':
        results = toFilter.filter(el => el.region.name === name );
      break;
      case 'type':
        results = toFilter.filter(el => el.type.name === name );
      break;
      case 'grape':
        results = toFilter.filter(el => {
          return el.grapes.find(grape => grape.name === name)
        } );
      break;
      default:
      results = toFilter;
      break;
    }

    return results
  }
}
