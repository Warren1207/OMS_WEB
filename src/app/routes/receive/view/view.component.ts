import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { ReceiveService } from '../receive.service';

@Component({
  selector: 'app-receive-view',
  templateUrl: './view.component.html',
})
export class ReceiveViewComponent implements OnInit {
  
  base: any;
  detail: any;
  id: any = this.activateInfo.snapshot.params['id'];

  constructor(
    public http: _HttpClient,
    private activateInfo: ActivatedRoute,
    private service: ReceiveService
  ) { }

  ngOnInit(): void {
    this.service.getFn(`get/`+this.id).subscribe(function(res){
      this.base = res;
      if(this.base.OB01){
        this.service.getFn('getDetail/'+this.base.OB01).subscribe(res => this.detail = res);
      }
    }.bind(this));
  }
}
