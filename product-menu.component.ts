import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
  categories:Category[];

  constructor(private productService:ProductService) { }

  ngOnInit(){
    this.listCategories();
  }

  listCategories(){
    this.productService.getCategoryList().subscribe(
      data =>{
        this.categories=data;
      }
    )
  }

}
