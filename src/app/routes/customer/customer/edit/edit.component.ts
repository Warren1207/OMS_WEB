import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
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
      public msgSrv: NzMessageService,
      private activateInfo: ActivatedRoute,
      private service: CustomerService,
    ) {}

    ngOnInit(): void {
      this.basicForm = this.fb.group({
        NUMBER: [],
        NAME: [ null, [ Validators.required ] ],
        EMAIL: [ null, [ Validators.email ] ],
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
        this.service.getFn(`get/${this.id}`).subscribe(
          function(res){
            this.basicForm.patchValue(res)
            if(res.NUMBER){
              this.service.getFn('getDetail/'+res.NUMBER).subscribe(res => this.detailForm.patchValue(res));
            }
          }.bind(this)
        );
      }
    }

    resetForm(){
      this.basicForm.reset();
      this.detailForm.reset();
    }
    submitForm() {
      const base = this.basicForm.getRawValue();      
      const detail = this.detailForm.getRawValue();
      this.service.postFn(`save/${this.id>0?this.id:'add'}`, { base: base, detail: detail }).subscribe(res => {
        this.msgSrv.success('保存成功');
      });
    }
  }
