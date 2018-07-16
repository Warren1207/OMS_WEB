import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListComponent } from './list/list.component';
import { PurchaseViewComponent } from './view/view.component';
import { PurchaseEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: PurchaseListComponent },
  { path: 'view', component: PurchaseViewComponent },
  { path: 'edit', component: PurchaseEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
