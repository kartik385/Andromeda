import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  currentCategoryId:number=1;
  searchedWord:string;
  thePageNumber:number=1;
  thePageSize:number=10;
  theTotalElements:number=0;
  theFormerCategoryId:number=1;

  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(()=>{this.listProducts();
    });
  }



  listProducts() {
    const searched:boolean=this.route.snapshot.paramMap.has("keyword");
    if(searched){
      this.searchProductsList();
    }
    else{
      this.generalProductsList();
    }
   
  }



  searchProductsList(){
      this.searchedWord=this.route.snapshot.paramMap.get("keyword");
      this.productService.getSearchList(this.searchedWord).subscribe(
        data =>{
          this.products=data;
        }
      )
  }



  generalProductsList(){
    const hasCategoryId:boolean=this.route.snapshot.paramMap.has("id");

    if(hasCategoryId){
      this.currentCategoryId=+this.route.snapshot.paramMap.get("id");
    }
    else{
      this.currentCategoryId=1;
    }
    if(this.currentCategoryId!=this.theFormerCategoryId){
      this.thePageNumber=1;
    }
    this.theFormerCategoryId=this.currentCategoryId;

    

    this.productService.getProductListPaginate(this.thePageNumber-1,this.thePageSize,this.currentCategoryId).subscribe(this.getResults());
  }

  addToCart(product:Product){
    console.log(`Adding to Cart: ${product.name},${product.unitPrice}`);

    const cartItem:CartItem=new CartItem(product);

    this.cartService.addToCart(cartItem);

  }
  getResults(){
    return data=>{
      this.products=data._embedded.products;
      this.thePageNumber=data.page.number+1;
      this.thePageSize=data.page.size;
      this.theTotalElements=data.page.totalElements;
    }
  }

}
