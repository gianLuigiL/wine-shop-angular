import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { DrinksService } from '../../services/drinks.service';

import { Drink } from '../../interfaces/drink';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  public relatedDrinks: Drink[];
  public drink: Drink;
  private id: number;

  constructor(
    private cart: CartService,
    private drinksService: DrinksService,
    private route: ActivatedRoute
    ) { }


  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    })
    this.drinksService.getDrinkObservable().subscribe(drinks => {
      this.drink = drinks.find(el => el.id === this.id);
      this.relatedDrinks = drinks.filter(el => el.category.name === this.drink.category.name );
      const maxRelated = this.relatedDrinks.length > 5 ? 5 : this.relatedDrinks.length
      this.relatedDrinks = this.relatedDrinks.slice(0, maxRelated );
    })
  }

  addToCart(drink){
    this.cart.addItem(drink);
  }

}
