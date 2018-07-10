import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderOrderComponent } from './order/order.component';

const COMPONENTS = [
  OrderOrderComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class OrderModule { }
