import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { SharedComponents } from './index';

@NgModule({
  declarations: [
    ...SharedComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    ...SharedComponents
  ]
})
export class SharedModule {  }