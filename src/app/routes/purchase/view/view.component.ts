import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase-view',
  templateUrl: './view.component.html',
})
export class PurchaseViewComponent implements OnInit {
  
  base: any;
  detail: any;
  id: any = this.activateInfo.snapshot.params['id'];
  
  constructor(
    public http: _HttpClient,
    private activateInfo: ActivatedRoute,
    private service: PurchaseService) { }

  ngOnInit() {
    this.service.getFn(`get/`+this.id).subscribe(function(res){
      this.base = res;
      if(this.base.OB01){
        this.service.getFn('getDetail/'+this.base.OB01).subscribe(res => this.detail = res);
      }
    }.bind(this));
  }
}
