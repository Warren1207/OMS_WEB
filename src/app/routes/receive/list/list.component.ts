import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-list',
  templateUrl: './list.component.html',
})
export class ReceiveListComponent implements OnInit {

    params: any = {};
    url = `omsApi/receive/query`;
    searchSchema: SFSchema = {
      properties: {
        PB01: {
          type: 'string',
          title: '收货单号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '收货单号', index: 'PB01' },
      { title: '供应简称',  index: 'PB06' },
      { title: '采购来源',  index: 'PB04' },
      { title: '收货日期', type: 'date', index: 'PB03' },
      {
        title: '操作',
        buttons: [
          { text: '查看', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/receive/view/' , item.ID]);
          }.bind(this) },
           { text: '编辑', click: function(item){
            const router = this.injector.get(Router);
            router.navigate(['/receive/edit/' , item.ID]);
          }.bind(this) },
        ]
      }
    ];

    constructor(private injector: Injector) { }

    ngOnInit() { }

    add() {
      const router = this.injector.get(Router);
      router.navigate(['/receive/edit/0']);
    }

}
