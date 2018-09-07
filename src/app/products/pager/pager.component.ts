import { Component, OnInit, Input } from '@angular/core';

import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  
  @Input() pager: any;

  constructor(private pagerService: PagerService){}

  ngOnInit(){

  }

  setPage(number){
    this.pagerService.setPage(number);
    window.scrollTo({top: 50, behavior: 'smooth'});
  }
}
