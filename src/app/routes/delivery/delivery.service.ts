import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class DeliveryService {

    constructor(private http: HttpClient) { }

    /* http Post 请求 head类型 */
    httpHead = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    /* GET 方法 */
    getFn(url: string) {
        return this.http.get('omsApi/delivery/' + url).catch(this.handleError);
    }
    /* POST 方法 */
    postFn(url: string, params: any) {
        return this.http.post('omsApi/delivery/' + url, params, this.httpHead).catch(this.handleError);
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}