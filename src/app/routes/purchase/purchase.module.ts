import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseListComponent } from './list/list.component';
import { PurchaseViewComponent } from './view/view.component';
import { PurchaseEditComponent } from './edit/edit.component';
import { PurchaseService } from './purchase.service';

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
  entryComponents: COMPONENTS_NOROUNT,
  /**注入 Service */
  providers: [PurchaseService]
})
export class PurchaseModule { }
