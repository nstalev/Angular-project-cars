import { Component, OnInit } from '@angular/core';
import { CarService } from './../../../core/services/car/car.service'
import { CarModel} from './../../../core/models/view-models/car-view-model'

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  data;

  constructor( private carServide: CarService) { }

  ngOnInit() {
    this.carServide.getAllCars().subscribe(cars =>{
      this.data = cars
    })
  }

}
