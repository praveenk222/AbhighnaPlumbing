import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GetallordersComponent } from './getallorders/getallorders.component';
import { MeasuremetTypeComponent } from './measuremet-type/measuremet-type.component';



const routes: Routes = [
  {path:'getProduct',component:ProductDetailsComponent},
  {path:'addproduct',component:AddProductComponent},
{path:"CreateOrder",component:CreateOrderComponent},
{path:'orderlist',component:GetallordersComponent},
{path:'',component:LoginComponent},
{path:'lookup',component:MeasuremetTypeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
