import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    CategoriesComponent,
    CollectionsComponent,
    CollectionCardComponent,
    NewProductsComponent,
    ProductCardComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
