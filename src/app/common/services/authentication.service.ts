import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpService } from './http.service'
import { Config } from './config'

@Injectable()
export class AuthenticationService {

  public user;
  public hasSession: boolean = false;
  public apiURL = Config.API_URL;

  constructor(public _http: HttpService, public _localStorage: LocalStorageService) { }


  public isLoggedIn(): boolean{
    const user =  this._localStorage.retrieve('user');
    if(!!user){
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public logIn(username: string, password: string){
    const url = `${this.apiURL}login/post`;
    
    return this._http.post(url, {
      username,
      password,
      lang: "EN"
    });
  }

  public logOut(){
    this.user = null;
    this.hasSession = false;
    this._localStorage.clear('user');
  }

}
