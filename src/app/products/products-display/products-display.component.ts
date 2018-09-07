import { Component, OnInit, OnDestroy } from '@angular/core';

//Interfaces
import { Drink } from '../../interfaces/drink';

//Services
import { DrinksService } from '../../services/drinks.service';
import { PagerService } from '../../services/pager.service';
import { FilterProductsService } from '../../services/filter-products.service';
import { ProductsSorterService } from '../../services/products-sorter.service';

//Router
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss']
})
export class ProductsDisplayComponent implements OnInit, OnDestroy {

  public pager: any;
  public allDrinks: Drink[] = [];
  public paginatedDrinks: Drink[] = [];
  
  private drinkSubscription: any;
  private paramSubscription: any;
  private sorterSubscription: any;
  private pagerSubscription: any;

  constructor(
    private drinkService: DrinksService,
    private pagerService: PagerService,
    private sorter: ProductsSorterService,
    private filterService: FilterProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.drinkSubscription = this.drinkService.getAllDrinks().subscribe(drinks => {
      this.allDrinks = drinks;

      this.paramSubscription =  this.route.params.subscribe((params: Params) => {
        let filteredDrinks = this.filterService.filter(drinks, params['filter'], params['name']);
        this.sorterSubscription = this.sorter.initialize(filteredDrinks).subscribe(sortedDrinks => {
          this.pagerSubscription = this.pagerService.initializePaginatedItems(sortedDrinks, 10, 5)
                                  .subscribe(pager => {
                                    this.pager = pager;
                                    this.paginatedDrinks = pager.paginatedItems;
                                  });
        })
        

      });
    });
  }

  ngOnDestroy(){
    this.drinkSubscription.unsubscribe();
    this.paramSubscription.unsubscribe();
    this.pagerSubscription.unsubscribe();
  }

}
