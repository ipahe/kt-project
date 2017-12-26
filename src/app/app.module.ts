import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './auth/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import { LoginComponent } from './public/login/login.component';
import { routes } from './routes';
import { HomeComponent } from './auth/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

import { AuthenticationService } from './common/services/authentication.service';
import { HttpService } from './common/services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
