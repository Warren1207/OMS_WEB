import { Component, OnInit } from '@angular/core';
  import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';

  @Component({
    selector: 'app-customer-customer-view',
    templateUrl: './view.component.html',
  })
  export class CustomerCustomerViewComponent implements OnInit {
    record: any = {};
    i: any;

    constructor(
      private modal: NzModalRef,
      public msgSrv: NzMessageService,
      public http: _HttpClient
    ) { }

    ngOnInit(): void {
      this.http.get(`api/customer/get/${this.record.ID}`).subscribe(res => this.i = res);
    }

    close() {
      this.modal.destroy();
    }
  }
