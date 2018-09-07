import { Component, OnInit, OnDestroy } from '@angular/core';

//Interfaces
import { Drink } from '../../interfaces/drink';

//Services
import { DrinksService } from '../../services/drinks.service';



@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit, OnDestroy{

  constructor(
    private drinkService: DrinksService
  ){}

  public drinks: Drink[];
  private drinkSubscription: any;

  ngOnInit(){
    this.drinkSubscription = this.drinkService.getAllDrinks().subscribe(drinks => {
      this.drinks = drinks;
    });
  }

  ngOnDestroy(){
    this.drinkSubscription.unsubscribe();
  }

}
