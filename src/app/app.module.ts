// All Modules in App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './components/shared/shared.module'
import { RouterModule } from "@angular/router";
import { CommonPagesModule } from './components/common/common-pages.module';
import { AuthModule } from "./components/authentication/auth.module";

import { AppComponent } from './app.component';

import { routes } from './app.routing';

import { AuthenticationService } from './core/services/authentication/auth.service';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonPagesModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  providers: [ AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
