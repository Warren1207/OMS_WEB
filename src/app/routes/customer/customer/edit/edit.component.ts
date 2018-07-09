import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../customer.service';


  @Component({
    selector: 'app-customer-customer-edit',
    templateUrl: './edit.component.html',
  })
  export class CustomerCustomerEditComponent implements OnInit {
    id: any = this.activateInfo.snapshot.params['id'];
    basicForm: FormGroup;  
    detailForm: FormGroup;

    isCollapse = true;

    toggleCollapse(): void {
      this.isCollapse = !this.isCollapse;
    }

    constructor(
      private fb: FormBuilder,
      private activateInfo: ActivatedRoute,
      private service: CustomerService,
    ) {}

    ngOnInit(): void {
      this.basicForm = this.fb.group({
        NUMBER: [],
        NAME: [ null, [ Validators.required ] ],
        EMAIL: [],
        TEL: [],
        CODE: [],
      });
      this.detailForm = this.fb.group({
        MANAGER: [],
        TYPE: [],
        CURRENCY: [],
        TAX: [],
        TERM_PAYMENT: [],
        TEL: [],
        AREA: [],
        COUNTRY: [],
        REGION: [],
        ADDRESS: [],
      });
      if (this.id > 0){             
          this.service.getFn(`api/customer/get/${this.id}`).subscribe(res => (this.basicForm.patchValue(res)));
      }
    }

    save(value: any) {      
      // this.service.postFn(`api/customer/save/${this.id>0?this.id:'add'}`, value).subscribe(res => {
      //   this.msgSrv.success('保存成功');
      // });
    }
    continue(){
      //  if(this.continueBtn == "取消"){
      //  }
      //  this.continueBtn = "取消"
      //  this.schema = {
      //   properties: {
      //     NUMBER : { type: 'string', title: '供应商编号', maxLength: 100 },
      //     NAME: { type: 'string', title: '供应商简称', maxLength: 100 },
      //     MANAGER : { type: 'string', title: '负责人', maxLength: 100 },
      //     TYPE: { type: 'string', title: '厂商分类', maxLength: 100 },
      //     CURRENCY: {  type: 'string',  title: '币种',  maxLength: 100 },
      //     TAX: {  type: 'string',  title: '税种',  maxLength: 100 },        
      //     TERM_PAYMENT: { type: 'string', title: '付款条件', maxLength: 100 },                          
      //     AREA: {  type: 'string', title: '地区',   maxLength: 100 },
      //     COUNTRY: {  type: 'string',  title: '国家',  maxLength: 100 },          
      //     REGION: {  type: 'string',  title: '区域',  maxLength: 100 },
      //     TEL: { type: 'string', title: '电话', maxLength: 100 },
      //     ADDRESS: { type: 'string', title: '送货地址', maxLength: 100 },
      //   },
      //   required: ['MANAGER', 'ADDRESS'],
      // }
      // this.ui = {
      //   '*': {
      //     spanLabelFixed: 120,
      //     grid: { span: 12 },
      //   },
      //   $NUMBER: {
      //     widget: 'text'
      //   },
      //   $NAME: {
      //     widget: 'text',
      //   },
      //   $MANAGER: {
      //     widget: 'string'
      //   },
      //   $TYPE: {
      //     widget: 'string',
      //   },
      //   $CURRENCY: {
      //     widget: 'string',
      //   },
      //   $TAX: {
      //     widget: 'string',
      //   },
      //   $TERM_PAYMENT: {
      //     widget: 'string',
      //   },
      //   $AREA: {
      //     widget: 'string',
      //   },
      //   $COUNTRY: {
      //     widget: 'string',
      //   },
      //   $REGION: {
      //     widget: 'string',
      //   },
      //   $TEL: {
      //     widget: 'string',
      //   },
      //   $ADDRESS: {
      //     widget: 'string',
      //   }
      // }
    }
    close() {
    }
  }
