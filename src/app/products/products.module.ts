//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../shared-modules/pipes/pipes.module';
import { RouterModule } from '@angular/router';

//Components
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsMenuComponent } from './products-menu/products-menu.component';
import { MenuHeadingComponent } from './menu-heading/menu-heading.component';
import { MenuSubHeadingComponent } from './menu-sub-heading/menu-sub-heading.component';
import { PagerComponent } from './pager/pager.component';
import { BreadcrumbsComponent } from '../general-components/breadcrumbs/breadcrumbs.component';
import { AffordancesComponent } from '../general-components/affordances/affordances.component';
import { SingleProductComponent } from './single-product/single-product.component';

//Services
import { DrinksService } from '../services/drinks.service';
import { CategoriesService } from '../services/categories.service';
import { ProductsSorterService } from '../services/products-sorter.service';

//Interface
import { Routes } from '@angular/router';

const productsRoutes: Routes = [
{path: 'products', component: ProductsViewComponent, children: [
  { path: '', component: ProductsDisplayComponent },
  { path: ':filter/:name', component: ProductsDisplayComponent },
  { path: ':filter/:name/:id', component: SingleProductComponent }
]},
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PipesModule,
    RouterModule.forChild(productsRoutes)
  ],
  exports: [
    ProductsViewComponent,
  ],
  declarations: [
    ProductsDisplayComponent, 
    ProductThumbnailComponent, 
    ProductsViewComponent, 
    ProductsMenuComponent, 
    MenuHeadingComponent, 
    MenuSubHeadingComponent, 
    PagerComponent,
    BreadcrumbsComponent,
    AffordancesComponent,
    SingleProductComponent,
  ],
  providers: [
    DrinksService,
    CategoriesService,
    ProductsSorterService
  ]
})
export class ProductsModule { }
