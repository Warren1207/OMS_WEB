import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../order.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
})
export class ViewComponent implements OnInit {
  base: any;
  detail: any;
  id: any = this.activateInfo.snapshot.params['id'];
  
  constructor(
    public http: _HttpClient,
    private activateInfo: ActivatedRoute,
    private service: OrderService) { }

  ngOnInit() {
    this.service.getFn(`get/`+this.id).subscribe(function(res){
      this.base = res;
      if(this.base.NUMBER){
        this.service.getFn('getDetail/'+this.base.NUMBER).subscribe(res => this.detail = res);
      }
    }.bind(this));
  }

}
