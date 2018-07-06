import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { CustomerCustomerEditComponent } from 'app/routes/customer/customer/edit/edit.component';
import { CustomerCustomerViewComponent } from 'app/routes/customer/customer/view/view.component';

@Component({
  selector: 'app-customer-customer',
  templateUrl: './customer.component.html',
})
export class CustomerCustomerComponent implements OnInit {

    params: any = {};
    url = `api/customer/query`;
    //url = `/user`;
    searchSchema: SFSchema = {
      properties: {
        NUMBER: {
          type: 'string',
          title: '供应商编号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '供应商编号', index: 'NUMBER' },
      { title: '供应商简称', index: 'NAME' },
      { title: '联系人手机号码',  index: 'TEL' },
      { title: '邮箱地址',  index: 'EMAIL' },
      { title: '状况码',  index: 'CODE' },
      {
        title: '',
        buttons: [
           { text: '查看', type: 'static', component: CustomerCustomerViewComponent, click: 'reload' },
           { text: '编辑', type: 'static', component: CustomerCustomerEditComponent, click: 'reload' },
        ]
      }
    ];

    constructor(private http: _HttpClient, private modal: ModalHelper) { }

    ngOnInit() { }

    add() {
      this.modal
        .static(CustomerCustomerEditComponent, { i: { id: 0 } })
        .pipe(filter(w => w === true))
        .subscribe(() => this.st.reload());
    }

}
