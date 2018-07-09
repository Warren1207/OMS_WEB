import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { filter } from 'rxjs/operators';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { CustomerCustomerViewComponent } from './view/view.component';
import { CustomerCustomerEditComponent } from './edit/edit.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-customer',
  templateUrl: './customer.component.html',
})
export class CustomerCustomerComponent implements OnInit {

    params: any = {};
    url = `api/customer/query`;
    searchSchema: SFSchema = {
      properties: {
        NAME: {
          type: 'string',
          title: '供应商简称'
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
          //  { text: '查看', type: 'static', component: CustomerCustomerViewComponent, click: 'reload' },
          { text: '查看', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/customer/view/' , item.ID]);
          }.bind(this) },
           { text: '编辑', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/customer/edit/' , item.ID]);
          }.bind(this) },
        ]
      }
    ];

    constructor(private http: _HttpClient, private modal: ModalHelper,private injector: Injector) { }

    ngOnInit() { }

    add() {
      const router = this.injector.get(Router);
            router.navigate(['/customer/edit/0']);
    }

}
