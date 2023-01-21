import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {
searchKey:string="";
products : any[]=[]
categories : any[]=[]
loading : boolean=false;
cartproducts : any[] = [];
constructor(private productservice :ProductsService){

}
ngOnInit(){

  this.getProducts();
  this.getCategories();

  this.productservice.search.subscribe((val:any) => {
    this.searchKey=val;

  })
}
getProducts(){
  this.loading=true
  this.productservice.getAllproducts().subscribe((res : any) =>{
          console.log(res);
          this.products=res;
          this.loading=false
  }

  )
}
getCategories(){
  this.loading=true
  this.productservice.getCategories().subscribe(
    (res2 : any) => {
  console.log(res2);
  this.categories=res2;
  this.loading=false
  }
  )
}
filterCategory(event:any){
  this.loading=true
  let value = event.target.value;

  console.log(value);
  if(value!="all"){
  this.productservice.getProductByCategory(value).subscribe((res:any)=>
  {
    console.log(res);
    this.products=res;
    this.loading=false
  })
}
if(value="all"){
  this.getProducts();
  this.loading=false


}
}
addTocart(event:any){
  //send Data as it should be sent to the localStorage
  if("cart" in localStorage){
    //receive data from localstrorage
    this.cartproducts = JSON.parse(localStorage.getItem("cart")!);
    let exist = this.cartproducts.find(item => item.id==event.item.id )
    if(exist){
      alert("le produit est déjà dans le panier")
    }
    else{
      this.cartproducts.push(event)
      localStorage.setItem("cart",JSON.stringify( this.cartproducts));
    }

  }
  else{
    this.cartproducts.push(event)
    localStorage.setItem("cart",JSON.stringify( this.cartproducts));
  }
}
}
