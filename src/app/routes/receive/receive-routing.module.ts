import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiveListComponent } from './list/list.component';
import { ReceiveViewComponent } from './view/view.component';
import { ReceiveEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: ReceiveListComponent },
  { path: 'view/:id', component: ReceiveViewComponent, data: { title: '收货单信息查看' } },
  { path: 'edit/:id', component: ReceiveEditComponent, data: { title: '收货单信息编辑' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveRoutingModule { }
