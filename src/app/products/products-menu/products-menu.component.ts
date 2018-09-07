import { Component, OnChanges } from '@angular/core';

//Decorators
import { Input } from '@angular/core';

//Interfaces
import { Category } from '../../interfaces/category';
import { Country } from '../../interfaces/country';
import { Drink } from '../../interfaces/drink';
import { Grape } from '../../interfaces/grape';
import { Region } from '../../interfaces/region';
import { Type } from '../../interfaces/type';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.scss']
})
export class ProductsMenuComponent implements OnChanges {

  public shrunk = false;

  @Input() drinks: Drink[];
  public categories: Category[] = [];
  //This is not typed because it's a modified version
  public countries = [];
  public regions: Region[] = [];
  public types: Type[] = [];
  public grapes: Grape[] = [];

  constructor() { }

  ngOnChanges(){
    //This function is used to build variables that are needed for the menu headings
    if(this.drinks){
      for(let drink of this.drinks){
        //TRY TO get the category whose id matches the current in the drink
        if(!(this.categories.find( (el) => { return el.id === drink.category.id } ))) {
          //If there's none, add the category to the array.
          this.categories.push(drink.category);
        }
        //Same as above with the country
        if(!(this.countries.find( (el) => { return el.id === drink.country.id } ))) {
          this.countries.push(drink.country);
        }
        //Same as above with the region
        if(!(this.regions.find( (el) => { return el.id === drink.region.id } ))) {
          this.regions.push(drink.region);
        }
        //Same as above with the type
        if(!(this.types.find( (el) => { return el.id === drink.type.id } ))) {
          this.types.push(drink.type);
        }
        //'grapes' is an Grape[] so iterate over each element and add to "grapes" the missing ones
        for(let grape of drink.grapes){
          if(!(this.grapes.find( (el) => { return el.id === grape.id } ))) {
            this.grapes.push(grape);
          }
        }
        //Iterate over each country and create the slot for the regions
        for(let country of this.countries){
          country.regions = [];
        }
      }
      //This piece allocates the regions into their own country array
      for(let region of this.regions){
        //Get the parent country from the countries array
        let country = this.countries.find( el => { return el.id === region.countryID } )
        //If the country.regions array doesn't hold the current region, add it.
        if(!country.regions.find(el => el.id === region.id) ) {
          country.regions.push(region);
        }
      }

    }
  }

  shrink(){
    this.shrunk = !this.shrunk;
  }

}
