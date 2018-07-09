import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../customer.service';

  @Component({
    selector: 'app-customer-customer-view',
    templateUrl: './view.component.html',
  })
  export class CustomerCustomerViewComponent implements OnInit {
    record: any = {};
    i: any;
    id: any = this.activateInfo.snapshot.params['id'];
    constructor(
      public msgSrv: NzMessageService,
      public http: _HttpClient,
      private activateInfo: ActivatedRoute,
      private service: CustomerService,
    ) { }

    ngOnInit(): void {
      this.service.getFn(`api/customer/get/`+this.id).subscribe(res => this.i = res);
    }

    close() {
      
    }
  }
