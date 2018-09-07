import { Component } from '@angular/core';

//Decorators
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-heading',
  templateUrl: './menu-heading.component.html',
  styleUrls: ['./menu-heading.component.scss']
})
export class MenuHeadingComponent {

  public active = false; 
  @Input() elements;
  @Input() description: string;
  @Input() elementType: string;

  constructor(private router: Router) { }

  toggleActive($event){
    if($event.target.classList.contains('menu-heading') ||
       $event.target.classList.contains('title') || 
       $event.target.nodeName == 'IMG' ){
      this.active = !this.active;
    }
  }

}
