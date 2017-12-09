// All Modules in App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './components/shared/shared.module'
import { RouterModule } from "@angular/router";
import { CommonPagesModule } from './components/common/common-pages.module';


import { AppComponent } from './app.component';

import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonPagesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
