import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication.service'
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public id = Math.random().toString(36).substring(4);
  public user: any = {};

  constructor(public _authService: AuthenticationService,
              public _router: Router,
              public _localStorageServ: LocalStorageService) { }

  ngOnInit() {
    let isAuthenticated = true;
  }

  onSubmit(event: Event){
    event.preventDefault();
    
    this._authService.logIn(this.user.username, this.user.password).subscribe(
      (user) => {
        this._authService.user = user;
        this._authService.hasSession = true;
        this._localStorageServ.store('user', user);
        this._router.navigate(['/home']);

      },
      (error) => {
        console.log(error);
        this._authService.hasSession = false;
      }
    );

    
  }
  

}
