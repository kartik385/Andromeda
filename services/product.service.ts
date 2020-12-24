import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { Category } from '../common/category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl="http://localhost:8080/api/products";
  private catUrl="http://localhost:8080/api/product-category";
  constructor(private httpClient: HttpClient) { }

  getProductListPaginate(page:number,size:number,theCategoryId:number):Observable<GetProductResponse>{

    const paginateUrl=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                      +`&page=${page}&size=${size}`;
    return this.httpClient.get<GetProductResponse>(paginateUrl);
  }

  getProductList(theCategoryId:number):Observable<Product[]>{

    const changeUrl=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<GetProductResponse>(changeUrl).pipe(
      map(response => response._embedded.products));
  }



  getCategoryList():Observable<Category[]>{
    return this.httpClient.get<GetCategoryResponse>(this.catUrl).pipe(
      map(response => response._embedded.productCategory));
  }



  getSearchList(keyword:string):Observable<Product[]>{
    const searchUrl=`${this.baseUrl}/search/findByNameContaining?name=${keyword}`;
    return this.httpClient.get<GetProductResponse>(searchUrl).pipe(
      map(response => response._embedded.products));
  }

  getProductDetail(theProductId:number):Observable<Product>{
    const detailUrl=`${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(detailUrl);

  }
}


interface GetProductResponse{
  _embedded:{
    products:Product[];
  },
  page:{
    size : number,

    totalElements : number,

    totalPages : number,

    number : number
  }

  
}
interface GetCategoryResponse{
  _embedded:{
    productCategory:Category[];
  }

}


