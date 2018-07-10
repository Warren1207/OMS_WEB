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
    base: any;
    detail: any;
    id: any = this.activateInfo.snapshot.params['id'];
    constructor(
      public msgSrv: NzMessageService,
      public http: _HttpClient,
      private activateInfo: ActivatedRoute,
      private service: CustomerService,
    ) { }

    ngOnInit(): void {
      this.service.getFn(`get/`+this.id).subscribe(function(res){
        this.base = res;
        if(this.base.NUMBER){
          this.service.getFn('getDetail/'+this.base.NUMBER).subscribe(res => this.detail = res);
        }
      }.bind(this));
    }

    close() {
      
    }
  }
