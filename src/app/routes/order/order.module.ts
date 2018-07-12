import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderOrderComponent } from './order/order.component';
import { EditComponent } from './order/edit/edit.component';
import { ViewComponent } from './order/view/view.component';
import { OrderService } from './order.service';

const COMPONENTS = [
  OrderOrderComponent];
const COMPONENTS_NOROUNT = [
  EditComponent,
  ViewComponent
];

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT,
  /**注入 Service */
  providers: [OrderService]
})
export class OrderModule { }
