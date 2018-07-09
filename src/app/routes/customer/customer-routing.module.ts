import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCustomerComponent } from './customer/customer.component';
import { CustomerCustomerViewComponent } from './customer/view/view.component';
import { CustomerCustomerEditComponent } from './customer/edit/edit.component';

const routes: Routes = [
  { path: 'list', component: CustomerCustomerComponent },
  { path: 'view/:id', component: CustomerCustomerViewComponent , data: { title: '供应商信息查看' }},
  { path: 'edit/:id', component: CustomerCustomerEditComponent , data: { title: '供应商信息编辑' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
