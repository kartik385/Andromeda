import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-datails',
  templateUrl: './cart-datails.component.html',
  styleUrls: ['./cart-datails.component.css']
})
export class CartDatailsComponent implements OnInit {
  cartItems:CartItem[]=[];
  totalQuantity:number=0;
  totalPrice:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartDetails();
  }

  cartDetails(){
    this.cartItems=this.cartService.cartItems;


    this.cartService.totalPrice.subscribe(
      data=>this.totalPrice=data
    );


    this.cartService.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    );

    this.cartService.computeCartTotals();
  }
 

  incrementItem(theCartItem:CartItem){
    this.cartService.addToCart(theCartItem);
  }
  decrementItem(theCartItem:CartItem){
  
    this.cartService.decrementCart(theCartItem);
  }
  remove(theCartItem:CartItem){
    this.cartService.remove(theCartItem);
  }
  

}
