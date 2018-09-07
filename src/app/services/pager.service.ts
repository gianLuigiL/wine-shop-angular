import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagerService {
  //Set vars relative to the pages
  public currentPage: number = 1;
  //Clickable index pages
  public startPage: number;
  public lastPage: number;
  //Total # of pages
  public numOfPages: number;  
  //Array to iterate over
  public visiblePages: Array<number>;
  private itemsPerPage: number;
  //Indexes for slicing
  private startIndex: number = 0;
  private lastIndex: number;
  //Holds a copy of every and paginated items
  private allItems: Array<any>;
  private paginatedItems: Array<any>;
  //Length of all items array
  private quantity: number;
  //How many intermediate links to display
  private links: number;
  //Result to be returned
  public pager: BehaviorSubject<any> = new BehaviorSubject<any>({});

  //This needs to be called by the outermost container
  initializePaginatedItems(allItems: Array<any>, itemsPerPage: number, maxLinks: number){
    this.allItems = allItems;
    this.itemsPerPage = itemsPerPage;
    this.quantity = allItems.length;
    this.numOfPages = Math.ceil(this.quantity/itemsPerPage);
    this.links = Math.min(this.numOfPages, maxLinks);

    this.updatePages();
    this.setPager();
    return this.pager.asObservable();
  }

  updatePages(){
    //Fix eventual out of range values
    if(this.currentPage < 1){
      this.currentPage = 1;
    } else if (this.currentPage > this.numOfPages){
      this.currentPage = this.numOfPages;
    }
    //Indexes to slice all items
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.lastIndex = Math.min(this.startIndex + this.itemsPerPage - 1, this.quantity - 1);

    //If the total pages are less than the links to be clicked display all pages
    if (this.numOfPages <= this.links) {
      this.startPage = 1;
      this.lastPage = this.numOfPages;
  } else {
    //If they are more, calculate the starting and ending page based on how many links to display
    //The current page is less than halfway throught he maximum links display from 1 to N links
      if (this.currentPage <= this.links / 2) {
          this.startPage = 1;
          this.lastPage = this.links;
    //If the current page is approaching the end display accordingly
      } else if (this.currentPage + Math.floor(this.links / 2) >= this.numOfPages) {
          this.startPage = this.numOfPages - ( this.links - 1);
          this.lastPage = this.numOfPages;
      } else {
    //If the current page is in the middle of the available ages set accordingly
          this.startPage = this.currentPage - Math.floor(this.links / 2);
          this.lastPage = this.currentPage + Math.round(this.links / 2) - 1;
      }
  }
    //Array that holds page numbers for the current view
    this.visiblePages =  Array.from(Array((this.lastPage + 1) - this.startPage).keys()).map(i => this.startPage + i);
    //Slice of all items relative to current indexes
    this.paginatedItems = this.allItems.slice(this.startIndex, this.lastIndex + 1)
  }
  //Set clicked page and update data
  setPage(page: number){
    this.currentPage = page;
    this.updatePages();
    this.setPager();
  }

  //Update data in the pager to be observed by every listenign component.
  setPager(){
    this.pager.next({
      visiblePages: this.visiblePages,
      paginatedItems: this.paginatedItems,
      startPage: this.startPage,
      lastPage: this.lastPage,
      currentPage: this.currentPage,
      numOfPages: this.numOfPages
    });
  }

  getPager(){
    return this.pager.asObservable();
  }
}
