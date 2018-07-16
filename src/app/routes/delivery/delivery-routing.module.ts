import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryListComponent } from './list/list.component';
import { DeliveryViewComponent } from './view/view.component';
import { DeliveryEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: DeliveryListComponent },
  { path: 'view/:id', component: DeliveryViewComponent, data: { title: '出货单信息查看' } },
  { path: 'edit/:id', component: DeliveryEditComponent, data: { title: '出货单信息编辑' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
