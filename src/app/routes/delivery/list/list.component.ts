import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './list.component.html',
})
export class DeliveryListComponent implements OnInit {

    params: any = {};
    url = `omsApi/delivery/query`;
    searchSchema: SFSchema = {
      properties: {
        OB01: {
          type: 'string',
          title: '出货单号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '出货单号', index: 'OB01' },
      { title: '贸易性质', index: 'OB02' },
      { title: '出货日期',  type: 'date', index: 'OB03' },
      { title: '订单单号',  index: 'OB21' },
      { title: '客户简称',  index: 'OB06' },
      {
        title: '操作',
        buttons: [
          { text: '查看', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/delivery/view/' , item.ID]);
          }.bind(this) },
           { text: '编辑', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/delivery/edit/' , item.ID]);
          }.bind(this) },
        ]
      }
    ];

    constructor(private injector: Injector) { }

    ngOnInit() { }

    add() {
      const router = this.injector.get(Router);
      router.navigate(['/delivery/edit/0']);
    }

}
