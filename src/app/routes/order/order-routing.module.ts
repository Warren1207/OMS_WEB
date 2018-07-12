import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderOrderComponent } from './order/order.component';
import { ViewComponent } from './order/view/view.component';
import { EditComponent } from './order/edit/edit.component';

const routes: Routes = [

  { path: 'list', component: OrderOrderComponent },
  { path: 'view/:id', component: ViewComponent , data: { title: '订单信息查看' }},
  { path: 'edit/:id', component: EditComponent , data: { title: '订单信息编辑' }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
