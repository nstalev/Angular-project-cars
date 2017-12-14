import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router"
import { NgxGalleryModule } from 'ngx-gallery';
import { MyOwnCustomMaterialModule } from "../../core/AngularMaterial/angular-material-module";
import { BrowserModule } from "@angular/platform-browser";
import {NgxPaginationModule} from 'ngx-pagination';

import { CarsComponents } from './index';
import { CarService } from "../../core/services/car/car.service";
import { carPaths } from "./car.routing";

@NgModule({
  declarations: [
    ...CarsComponents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(carPaths),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    NgxPaginationModule
  ],
  providers: [CarService],
  exports: [
    ...CarsComponents
  ]
})
export class CarsModule {  }