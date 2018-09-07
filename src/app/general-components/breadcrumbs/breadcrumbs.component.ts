import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public filter: string = '';
  public name: string = '';
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (param: ParamMap) => {
      this.filter = param.get('filter');
      switch(this.filter){
        case 'category':
        this.filter = 'categories';
        this.name = param.get('name');
        break;
        case 'country':
        this.filter = 'countries';
        this.name = param.get('name');
        break;
        case 'region':
        this.filter = 'regions';
        this.name = param.get('name');
        break;
        case 'type':
        this.filter = 'types';
        this.name = param.get('name');
        break;
        case 'grape':
        this.filter = 'grapes';
        this.name = param.get('name');
        break;
        default:
        this.filter = undefined;
        this.name = undefined;
      }
    } );
  }

}
