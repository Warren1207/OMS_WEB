import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerCustomerComponent } from './customer/customer.component';
import { CustomerCustomerEditComponent } from './customer/edit/edit.component';
import { CustomerCustomerViewComponent } from './customer/view/view.component';

const COMPONENTS = [
  CustomerCustomerComponent];
const COMPONENTS_NOROUNT = [
  CustomerCustomerEditComponent,
  CustomerCustomerViewComponent];

@NgModule({
  imports: [
    SharedModule,
    CustomerRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class CustomerModule { }
