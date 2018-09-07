import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-dropdown-item',
  templateUrl: './cart-dropdown-item.component.html',
  styleUrls: ['./cart-dropdown-item.component.scss']
})
export class CartDropdownItemComponent implements OnInit {

  @Input() item = [];

  constructor() { }

  ngOnInit() {
  }

}
