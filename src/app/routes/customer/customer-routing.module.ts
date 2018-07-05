import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCustomerComponent } from './customer/customer.component';

const routes: Routes = [

  { path: 'customer', component: CustomerCustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
