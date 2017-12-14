import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { CommonPagesComponents } from './index';

@NgModule({
  declarations: [
    ...CommonPagesComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXmkNAF7T5GhOKVxR3I0BsGo6-2AYYQUM'
    }),
  ],
  exports: [
    ...CommonPagesComponents
  ]
})
export class CommonPagesModule {  }