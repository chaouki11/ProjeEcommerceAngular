import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AllproductsComponent,
    ProductsdetailsComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ProductsModule { }
