import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {

  }
  public search = new BehaviorSubject<string>("");

  getAllproducts(){
     return this.http.get("https://fakestoreapi.com/products");
  }
  getCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories");
  }

getProductByCategory(key:string){
    return this.http.get("https://fakestoreapi.com/products/category/"+key);
}
getProductById(id:any){
  return this.http.get("https://fakestoreapi.com/products/"+id);
}

}
