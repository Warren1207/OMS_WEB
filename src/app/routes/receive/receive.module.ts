import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ReceiveRoutingModule } from './receive-routing.module';
import { ReceiveListComponent } from './list/list.component';
import { ReceiveViewComponent } from './view/view.component';
import { ReceiveEditComponent } from './edit/edit.component';
import { ReceiveService } from './receive.service';

const COMPONENTS = [
  ReceiveListComponent,
  ReceiveViewComponent,
  ReceiveEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ReceiveRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT,
  /**注入 Service */
  providers: [ReceiveService]
})
export class ReceiveModule { }
