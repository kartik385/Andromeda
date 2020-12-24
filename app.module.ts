import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import {Routes,RouterModule} from '@angular/router';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDatailsComponent } from './components/cart-datails/cart-datails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

const routes:Routes=[
  {path :'checkout' ,component:CheckoutComponent},
  {path :'cartdetails' ,component:CartDatailsComponent},
  {path :'products/:id' ,component:ProductDetailComponent},
  {path :'search/:keyword' ,component:ProductListComponent},
  {path :'category/:id' ,component:ProductListComponent},
  {path:'products',component:ProductListComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'**',redirectTo:'/products',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductMenuComponent,
    ProductSearchComponent,
    ProductDetailComponent,
    CartStatusComponent,
    CartDatailsComponent,
    CheckoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
