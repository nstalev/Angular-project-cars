import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
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

  categories;
  selectedCategory;
  p: number = 1;
  data;
  allCars;
  $sub;

  constructor( private carServide: CarService,
               private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.selectedCategory = 'all';
    this.spinnerService.show();
    this.$sub = this.carServide.getAllCars().subscribe(cars =>{
      this.allCars = cars;
      this.data = cars;

      this.spinnerService.hide();
    })

    this.categories = [
      {value: 'all', viewValue: 'Всички'},
      {value: 'волан', viewValue: 'Волан'},
      {value: 'салон', viewValue: 'Салон'},
      {value: 'табло', viewValue: 'Табло'},
      {value: 'друго', viewValue: 'Друго'},
    ]
  }


  ngOnDestroy(){
    this.$sub.unsubscribe();
  }

  filterDataByCategory(){
    if(this.selectedCategory == 'all'){
      this.data = this.allCars
    }else{
      this.data = this.allCars.filter(a => a.category == this.selectedCategory)
    }

  }

}
