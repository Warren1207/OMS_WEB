import { Component, OnInit } from '@angular/core';
import { zh_CN, NzI18nService, NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReceiveService } from '../receive.service';

@Component({
  selector: 'app-receive-edit',
  templateUrl: './edit.component.html',
})
export class ReceiveEditComponent implements OnInit {
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
      public service: ReceiveService,
    ) {}

    ngOnInit(): void {
      
      this.basicForm = this.fb.group({
        PB01: [],
        PB02: [],
        PB03: [],
        PB04: [],
        PB05: [],
        PB06: [],
        PB07: [],
        PB08: [],
        PB09: [],
        PB10: [],
        PB11: [],
        PB12: [],
        PB13: [],
        PB14: [],
        PB15: [],
        PB16: [],
        PB17: [],
        PB18: [],
        PBUSER: [],
        PBDATE: [],
        PBTIME: []
      });

      this.detailForm = this.fb.group({
        PBA03: [],
        PBA04: [],
        PBA05: [],
        PBA06: [],
        PBA07: [],
        PBA08: [],
        PBA09: [],
        PBA10: [],
        PBA11: [],
        PBA12: [],
        PBA13: [],
        PBA14: []
      });
  
      if (this.id > 0){             
        this.service.getFn(`get/${this.id}`).subscribe(
          function(res){
            this.basicForm.PBtchValue(res)
            if(res.NUMBER){
              this.service.getFn('getDetail/'+res.NUMBER).subscribe(res => this.detailForm.PBtchValue(res));
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
