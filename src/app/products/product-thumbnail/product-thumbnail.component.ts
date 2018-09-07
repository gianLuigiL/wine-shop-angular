//Interfaces
import { Component, Input } from '@angular/core';
import { Drink } from '../../interfaces/drink';

//Services
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent  {

  @Input() drink: Drink;

  constructor(private cart: CartService) { }

  addItem(item){
    console.log(item);
    this.cart.addItem(item);
  }

}
