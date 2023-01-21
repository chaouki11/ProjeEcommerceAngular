import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './products/components/productsdetails/productsdetails.component';

const routes: Routes = [
  {path:"products",component:AllproductsComponent},
  {path:"details/:id",component:ProductsdetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
