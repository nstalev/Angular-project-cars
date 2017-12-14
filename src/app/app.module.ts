// All Modules in App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './components/shared/shared.module'
import { RouterModule } from "@angular/router";
import { CommonPagesModule } from './components/common/common-pages.module';
import { AuthModule } from "./components/authentication/auth.module";
import { CarsModule } from './components/cars/cars.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { routes } from './app.routing';

import { AuthenticationService } from './core/services/authentication/auth.service';

//Guards
import { AuthenticationGuard } from './core/guards/authentication/authentication.guard';
import { AdminGuard } from './core/guards/admin-guard/admin-guard';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonPagesModule,
    RouterModule.forRoot(routes),
    AuthModule,
    CarsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [ AuthenticationService,AuthenticationGuard, AdminGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
