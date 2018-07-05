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
        number : { type: 'string', title: '供应商编号', maxLength: 100 },
        name: { type: 'string', title: '供应商简称', maxLength: 100 },
        email: { type: 'string', title: '邮箱地址', format: 'email', maxLength: 100 },
        tel: { type: 'string', title: '联系人手机号码', maxLength: 100 },        
        code: { type: 'string', title: '邀请码', maxLength: 100 },
      },
      required: ['number', 'name'],
    };
    ui: SFUISchema = {
      '*': {
        spanLabelFixed: 120,
        grid: { span: 12 },
      },
      $number: {
        widget: 'text'
      },
      $name: {
        widget: 'string',
      },
      $tel: {
        widget: 'string',
      },
      $email: {
        widget: 'string',
      },
      $code: {
        widget: 'string',
      },
    };

    constructor(
      private modal: NzModalRef,
      public msgSrv: NzMessageService,
      public http: _HttpClient,
    ) {}

    ngOnInit(): void {
      if (this.record.id > 0)
      this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    }

    save(value: any) {
      this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }

    close() {
      this.modal.destroy();
    }
  }
