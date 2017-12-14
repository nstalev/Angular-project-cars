import { Routes } from '@angular/router';
import { HomeComponent } from "./components/common/home/home.component";
import { ContactsComponent } from './components/common/contacts/contacts.component';
import { LoginFormComponent } from './components/authentication/login-form/login-form.component';
import { RegisterFormComponent } from './components/authentication/register-form/register-form.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
//import { CreateCarFormComponent } from './components/cars/create-car-form/create-car-form.component';

import {AuthenticationGuard} from './core/guards/authentication/authentication.guard'
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';




export const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',    component: HomeComponent },
    { path: 'login',  component: LoginFormComponent },
    { path: 'register',  component: RegisterFormComponent },
    { path: 'logout',  component: LogoutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'cars', loadChildren: 'app/components/cars/cars.module#CarsModule' },
    { path: '**', component: PageNotFoundComponent }
    
]