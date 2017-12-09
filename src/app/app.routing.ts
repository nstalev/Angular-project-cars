import { Routes } from '@angular/router';
import { HomeComponent } from "./components/common/home/home.component";
import { ContactsComponent } from './components/common/contacts/contacts.component';




export const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'contacts',  component: ContactsComponent },
    
]