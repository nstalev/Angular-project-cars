// All Modules in App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './components/shared/shared.module'
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/common/home/home.component';
//import { HeaderComponent } from './components/core/shared/header/header.component';

import { routes } from './app.routing';
import { ContactsComponent } from './components/common/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent
 
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
