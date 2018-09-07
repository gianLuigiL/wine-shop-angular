import { Injectable } from '@angular/core';

//Services
import { LocalStorageService } from './local-storage.service';

//RXJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private allItems: Array<Array<any>> = [];

  constructor(private storage: LocalStorageService) { 
    this.allItems = storage.get('cart');
    this.cart.next(this.allItems);
  }

  addItem(item){
    const itemIndex = this.allItems.findIndex(el => el[1]['id'] === item.id );
    if(itemIndex !== -1 ){
      this.allItems[itemIndex][0]++;
    } else {
      this.allItems.push([1, item]);
    }
    this.allItems.sort( (a,b)=> {

      if(a[1].name[0] < b[1].name[0]){
        return -1;
      } else if (a[1].name[0] > b[1].name[0]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.storage.set('cart', this.allItems);
    this.cart.next(this.allItems);
  }

  getCart(){
    return this.cart;
  }


}
