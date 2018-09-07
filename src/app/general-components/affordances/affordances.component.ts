import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ProductsSorterService } from '../../services/products-sorter.service';
import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-affordances',
  templateUrl: './affordances.component.html',
  styleUrls: ['./affordances.component.scss']
})
export class AffordancesComponent implements OnInit {

  public title;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private sorter: ProductsSorterService,
              private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      let filter = paramMap.get('filter');
      switch(filter){
        case 'category':
        this.title = `${paramMap.get('name')} Wines`;
        break;
        case 'country': case 'region':
        this.title = `Wines from ${paramMap.get('name')}`;
        break;
        case 'type':
        this.title = `${paramMap.get('name')} Wines`;
        break;
        case 'grape':
        this.title = `Browse by grape: ${paramMap.get('name')}`;
        break;
        default:
        this.title = 'All Wines';
        break;
      }
    });
  }

  sort(event){
    const children = event.target.childNodes;
    let value;
    for(const child of children){
      if(child.selected){
        value = child.value;
      }
    }
    this.sorter.sort(value);
    this.pagerService.setPage(1);
  }

}
