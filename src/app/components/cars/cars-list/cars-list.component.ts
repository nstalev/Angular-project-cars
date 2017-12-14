import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from './../../../core/services/car/car.service'
import { CarModel} from './../../../core/models/view-models/car-view-model'
import {MatPaginatorModule} from '@angular/material/paginator';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy {
  p: number = 1;
  data;
  $sub;

  constructor( private carServide: CarService,
               private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.$sub = this.carServide.getAllCars().subscribe(cars =>{
      this.data = cars
      this.spinnerService.hide();
    })
  }

  ngOnDestroy(){
    this.$sub.unsubscribe();
  }

}
