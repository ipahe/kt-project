import { Routes } from  '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AuthGuard} from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/login'
    },
    {
        path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [PublicGuard]
    },
    {
        path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]
    },
    {
        path: '**', component: NotFoundComponent
    }
]