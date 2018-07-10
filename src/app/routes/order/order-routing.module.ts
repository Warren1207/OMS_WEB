import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderOrderComponent } from './order/order.component';

const routes: Routes = [

  { path: 'list', component: OrderOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
