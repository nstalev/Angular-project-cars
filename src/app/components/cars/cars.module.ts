import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { CarsComponents } from './index';
import { CarService } from "../../core/services/car/car.service";

@NgModule({
  declarations: [
    ...CarsComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  exports: [
    ...CarsComponents
  ]
})
export class CarsModule {  }