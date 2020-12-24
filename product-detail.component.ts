import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product=new Product();
  productId:number;
  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(){
    this.route.paramMap.subscribe(()=>{this.getProduct();
    });
  }

  getProduct(){
    this.productId=+this.route.snapshot.paramMap.get("id");
    this.productService.getProductDetail(this.productId).subscribe(
      data =>{
        this.product=data;
      }
    )
    
  }
  addToCart(product:Product){
    console.log(`Adding to Cart: ${product.name},${product.unitPrice}`);

    const cartItem:CartItem=new CartItem(product);

    this.cartService.addToCart(cartItem);

  }

}
