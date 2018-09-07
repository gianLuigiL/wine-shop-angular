import { Component } from '@angular/core';

//Decorators
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-sub-heading',
  templateUrl: './menu-sub-heading.component.html',
  styleUrls: ['./menu-sub-heading.component.scss']
})
export class MenuSubHeadingComponent {

  public active = false;

  @Input() element;
  @Input() elementType;

  constructor(private router: Router) { }

  toggleActive($event){
    $event.stopPropagation();
    this.active = !this.active;  
  }

}
