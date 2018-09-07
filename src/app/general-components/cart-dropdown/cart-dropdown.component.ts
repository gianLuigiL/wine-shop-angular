import { Component, OnInit } from '@angular/core';

//Services
import { LocalStorageService } from '../../services/local-storage.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {

  public cart: Array<Array<any>> = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    })
  }

}
