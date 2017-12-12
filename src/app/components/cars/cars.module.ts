import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router"
import { NgxGalleryModule } from 'ngx-gallery';

import { CarsComponents } from './index';
import { CarService } from "../../core/services/car/car.service";
import { carPaths } from "./car.routing";

@NgModule({
  declarations: [
    ...CarsComponents,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(carPaths),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  providers: [CarService],
  exports: [
    ...CarsComponents
  ]
})
export class CarsModule {  }