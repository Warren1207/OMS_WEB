import { Component, OnInit } from '@angular/core';
import { zh_CN, NzI18nService, NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {
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
    private service: OrderService
  ) { }

  ngOnInit() {
    this.basicForm = this.fb.group({
      NUMBER: [],
      TYPE: [],
      ORDER_DATE: [],
      SOURCE: [],
      CUSTOMER_NUMBER: [],
      CUSTOMER_ABBREVIATION: [],
      SALESMAN: [],
      DEP: [],
      CURRENCY: [],
      CURRENCY_RATE: [],
      TAX: [],
      TAX_RATE: [],
      COLLECTION_TERMS: [],
      DELIVERY_ADDRESS: [],
      REMARKS: []
    });
    this.detailForm = this.fb.group({
      NUMBER: [],
      PRODUCT_CODE: [],
      PRODUCT_NAME: [],
      SPEC: [],
      UNIT: [],
      COUNT: [],
      UNTAXED_PRICE: [],
      TAX_PRICE: [],
      UNTAXED_MONEY: [],
      TAX_MONEY: [],
      DELIVERY_DATE: [],
      EXPECT_DELIVERY_DATE: []
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
