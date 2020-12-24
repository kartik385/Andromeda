import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalQuantity:number=0;
  totalPrice:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.updateCart();
  }

  updateCart(){
    this.cartService.totalPrice.subscribe(
      data=>this.totalPrice=data
    );

    this.cartService.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    );
  }

}
