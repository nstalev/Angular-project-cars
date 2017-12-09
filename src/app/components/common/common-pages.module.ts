import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CommonPagesComponents } from './index';

@NgModule({
  declarations: [
    ...CommonPagesComponents
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...CommonPagesComponents
  ]
})
export class CommonPagesModule {  }