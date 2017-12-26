import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Config } from './config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(public _http: Http) {
  }

  public get(url, token): Observable<any> {
    const header = new Headers({
      'Content-Type': 'application/json',
      'Api-Token': token
    });

    const options = new RequestOptions({ headers: header });
    return this._http.get(url, options).map(response => response.json());
  }


  public post(url, params, token?): Observable<any> {
    const header = !!token ? new Headers({
      'Content-Type': 'application/json',
      'Api-Token': token
    }) : new Headers({ 'Content-Type': 'application/json' });

    const options = new RequestOptions({ headers: header });
    const body = JSON.stringify(params);

    return this._http.post(url, body, options).map(response => response.json());
  }

}
