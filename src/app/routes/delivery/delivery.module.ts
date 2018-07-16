import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryListComponent } from './list/list.component';
import { DeliveryViewComponent } from './view/view.component';
import { DeliveryEditComponent } from './edit/edit.component';
import { DeliveryService } from './delivery.service';

const COMPONENTS = [
  DeliveryListComponent,
  DeliveryViewComponent,
  DeliveryEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DeliveryRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT,
  /**注入 Service */
  providers: [DeliveryService]
})
export class DeliveryModule { }
