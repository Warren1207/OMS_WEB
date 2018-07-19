import { Component, OnInit } from '@angular/core';
import { zh_CN, NzI18nService, NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from '../delivery.service';


  @Component({
    selector: 'app-delivery-edit',
    templateUrl: './edit.component.html',
  })
  export class DeliveryEditComponent implements OnInit {
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
      public service: DeliveryService,
    ) {}

    ngOnInit(): void {
      
      this.basicForm = this.fb.group({
        OB01: [],
        OB02: [],
        OB03: [],
        OB04: [],
        OB05: [],
        OB06: [],
        OB07: [],
        OB08: [],
        OB09: [],
        OB10: [],
        OB11: [],
        OB12: [],
        OB13: [],
        OB14: [],
        OB19: [],
        OB21: [],
        OB22: []
      });

      this.detailForm = this.fb.group({
        OBA03: [],
        OBA04: [],
        OBA05: [],
        OBA06: [],
        OBA07: [],
        OBA08: [],
        OBA09: [],
        OBA10: [],
        OBA11: [],
        OBA12: []
      });
  
      if (this.id > 0){             
        this.service.getFn(`get/${this.id}`).subscribe(
          function(res){
            this.basicForm.patchValue(res)
            if(res.OB01){
              this.service.getFn('getDetail/'+res.OB01).subscribe(res => this.detailForm.patchValue(res));
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
