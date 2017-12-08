// All Modules in App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './components/shared/shared.module'


import { AppComponent } from './app.component';
//import { HeaderComponent } from './components/core/shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
