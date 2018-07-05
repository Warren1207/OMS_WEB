import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { CustomerCustomerEditComponent } from 'app/routes/customer/customer/edit/edit.component';

@Component({
  selector: 'app-customer-customer',
  templateUrl: './customer.component.html',
})
export class CustomerCustomerComponent implements OnInit {

    params: any = {};
    url = `/user`;
    searchSchema: SFSchema = {
      properties: {
        number: {
          type: 'string',
          title: '供应商编号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '供应商编号', index: 'number' },
      { title: '供应商简称', index: 'name' },
      { title: '联系人手机号码',  index: 'tel' },
      { title: '邮箱地址',  index: 'email' },
      { title: '状况码',  index: 'code' },
      {
        title: '',
        buttons: [
          // { text: '查看', click: (item: any) => `/form/${item.id}` },
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
