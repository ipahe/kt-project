import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public isAuthenticated = false;
  public cadena = "Hola soy el Login components";
  public id = Math.random().toString(36).substring(4);
  public user: any = {};

  constructor() { }

  ngOnInit() {
    let isAuthenticated = true;
    console.log("isAuthenticated", this.isAuthenticated);
    
  }

  onSubmit(event: Event){
    event.preventDefault();
    console.log(this.user);
  }
  

}
