//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { PipesModule } from './shared-modules/pipes/pipes.module';

//Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './general-components/not-found/not-found.component';
import { CartDropdownComponent } from './general-components/cart-dropdown/cart-dropdown.component'

//Services
import { DbApiService } from './services/db-api.service';
import { CartDropdownItemComponent } from './general-components/cart-dropdown-item/cart-dropdown-item.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CartDropdownComponent,
    CartDropdownItemComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    RouterModule.forRoot(appRoutes),
    PipesModule
  ],
  providers: [DbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
