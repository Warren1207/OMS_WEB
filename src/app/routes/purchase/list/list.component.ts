import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './list.component.html',
})
export class PurchaseListComponent implements OnInit {

    params: any = {};
    url = `omsApi/purchase/query`;
    searchSchema: SFSchema = {
      properties: {
        PA01: {
          type: 'string',
          title: '采购单号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '采购单号', index: 'PA01' },
      { title: '供应简称',  index: 'PA06' },
      { title: '采购来源',  index: 'PA04' },
      { title: '采购日期', type: 'date', index: 'PA03' },
      {
        title: '操作',
        buttons: [
          { text: '查看', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/purchase/view/' , item.ID]);
          }.bind(this) },
           { text: '编辑', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/purchase/edit/' , item.ID]);
          }.bind(this) },
        ]
      }
    ];

    constructor(private injector: Injector) { }

    ngOnInit() { }

    add() {
      const router = this.injector.get(Router);
      router.navigate(['/purchase/edit/0']);
    }

}
