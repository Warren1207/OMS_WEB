import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-order',
  templateUrl: './order.component.html',
})
export class OrderOrderComponent implements OnInit {

    params: any = {};
    url = `api/order/query`;
    searchSchema: SFSchema = {
      properties: {
        NUMBER: {
          type: 'string',
          title: '订单单号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '订单单号', index: 'NUMBER' },
      { title: '贸易性质', index: 'TYPE' },
      { title: '订单来源',  index: 'SOURCE' },
      { title: '客户编号',  index: 'CUSTOMER_NUMBER' },
      { title: '客户简称',  index: 'CUSTOMER_ABBREVIATION' },
      { title: '订单日期', type: 'date', index: 'ORDER_DATE' },
      {
        title: '操作',
        buttons: [
          { text: '查看', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/order/view/' , item.ID]);
          }.bind(this) },
           { text: '编辑', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/order/edit/' , item.ID]);
          }.bind(this) },
        ]
      }
    ];

    constructor(private injector: Injector) { }

    ngOnInit() { }

    add() {
      const router = this.injector.get(Router);
      router.navigate(['/order/edit/0']);
    }

}
