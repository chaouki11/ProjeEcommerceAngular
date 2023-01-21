import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartproducts : any[] = [];
  total: number =0;
  ngOnInit(){
    this.getCartProduct();
    this.getCartTotal();
}
  getCartProduct(){
  if("cart" in localStorage){
    //receive data from localstrorage
    this.cartproducts = JSON.parse(localStorage.getItem("cart")!);

}
console.log(this.cartproducts)
  }
  getCartTotal(){
    this.total=0;
    for(let x in this.cartproducts){
      this.total=this.total+this.cartproducts[x].item.price * this.cartproducts[x].quantity;
    }
  }

}

