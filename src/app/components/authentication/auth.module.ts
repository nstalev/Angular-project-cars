import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { authenticationComponents } from './index';

@NgModule({
  declarations: [
    ...authenticationComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ...authenticationComponents
  ]
})
export class AuthModule {  }