import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent {
  id!:any
  data:any;

  constructor(private route:ActivatedRoute,private service :ProductsService){
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  getProduct(){
    this.service.getProductById(this.id).subscribe(res => {
        this.data=res;
        console.log(this.data);
    })
  }
  ngOnInit():void{
    this.getProduct();
  }
  }



