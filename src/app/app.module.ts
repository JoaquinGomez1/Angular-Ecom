import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderViewComponent } from './order-view/order-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { CollectionIdComponent } from './collection-id/collection-id.component';

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
    ShoppingCartComponent,
    CheckoutComponent,
    OrderViewComponent,
    ProductListComponent,
    CollectionIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ timeOut: 2000, positionClass: 'toast-top-center' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
