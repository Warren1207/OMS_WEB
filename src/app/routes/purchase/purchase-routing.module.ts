import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListComponent } from './list/list.component';
import { PurchaseViewComponent } from './view/view.component';
import { PurchaseEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: PurchaseListComponent },
  { path: 'view/:id', component: PurchaseViewComponent, data: { title: '采购单信息查看' } },
  { path: 'edit/:id', component: PurchaseEditComponent, data: { title: '采购单信息编辑' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
