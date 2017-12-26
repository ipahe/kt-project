import { Routes } from  '@angular/router';
import { LoginComponent } from './public/login/login.component'
import { HomeComponent } from './auth/home/home.component';
export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/login'
    },
    {
        path: 'login', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent, pathMatch: 'full'
    }
]