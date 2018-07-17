import { Component, OnInit } from '@angular/core';
import { zh_CN, NzI18nService, NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from '../purchase.service';

  @Component({
    selector: 'app-purchase-edit',
    templateUrl: './edit.component.html',
  })
  export class PurchaseEditComponent implements OnInit {
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
      public service: PurchaseService,
    ) {}

    ngOnInit(): void {
      
      this.basicForm = this.fb.group({
        PA01: [],
        PA02: [],
        PA03: [],
        PA04: [],
        PA05: [],
        PA06: [],
        PA07: [],
        PA08: [],
        PA09: [],
        PA10: [],
        PA11: [],
        PA12: [],
        PA13: [],
        PA14: [],
        PA15: [],
        PA16: [],
        PA17: [],
        PA18: [],
        PA19: [],
        PAUSER: [],
        PADATE: [],
        PATIME: [],
      });

      this.detailForm = this.fb.group({
        PAA03: [],
        PAA04: [],
        PAA05: [],
        PAA06: [],
        PAA07: [],
        PAA08: [],
        PAA09: [],
        PAA10: [],
        PAA11: [],
        PAA12: [],
        PAA13: [],
        PAA14: [],
        PAA15: [],
        PAA16: []
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
