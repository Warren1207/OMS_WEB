import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseListComponent } from './list/list.component';
import { PurchaseViewComponent } from './view/view.component';
import { PurchaseEditComponent } from './edit/edit.component';

const COMPONENTS = [
  PurchaseListComponent,
  PurchaseViewComponent,
  PurchaseEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    PurchaseRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class PurchaseModule { }
