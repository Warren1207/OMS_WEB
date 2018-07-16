import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiveListComponent } from './list/list.component';
import { ReceiveViewComponent } from './view/view.component';
import { ReceiveEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: ReceiveListComponent },
  { path: 'view', component: ReceiveViewComponent },
  { path: 'edit', component: ReceiveEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveRoutingModule { }
