import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isAuthenticated = false;

  constructor() { }

  ngOnInit() {
    console.log("isAuthenticated", this.isAuthenticated);
  }

  onSubmit(event){

  }

}
