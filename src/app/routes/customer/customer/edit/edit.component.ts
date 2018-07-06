import { Component, OnInit, ViewChild } from '@angular/core';
  import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';

  @Component({
    selector: 'app-customer-customer-edit',
    templateUrl: './edit.component.html',
  })
  export class CustomerCustomerEditComponent implements OnInit {
    record: any = {};
    i: any;
    schema: SFSchema = {
      properties: {
        NUMBER : { type: 'string', title: '供应商编号', maxLength: 100 },
        NAME: { type: 'string', title: '供应商简称', maxLength: 100 },
        EMAIL: { type: 'string', title: '邮箱地址', format: 'email', maxLength: 100 },
        TEL: { type: 'string', title: '联系人手机号码', maxLength: 100 },        
        CODE: { type: 'string', title: '邀请码', maxLength: 100 },
      },
      required: ['NUMBER', 'NAME'],
    };
    ui: SFUISchema = {
      '*': {
        spanLabelFixed: 120,
        grid: { span: 12 },
      },
      $NUMBER: {
        widget: 'text'
      },
      $NAME: {
        widget: 'string',
      },
      $TEL: {
        widget: 'string',
      },
      $EMAIL: {
        widget: 'string',
      },
      $CODE: {
        widget: 'string',
      },
    };

    constructor(
      private modal: NzModalRef,
      public msgSrv: NzMessageService,
      public http: _HttpClient,
    ) {}

    ngOnInit(): void {
      if (this.record.ID > 0)
      this.http.get(`api/customer/get/${this.record.ID}`).subscribe(res => (this.i = res));
    }

    save(value: any) {
      this.http.post(`api/customer/save/${this.record.ID>0?this.record.ID:'add'}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }

    close() {
      this.modal.destroy();
    }
  }
