import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './../../../core/services/car/car.service'
import { CarModel } from './../../../core/models/input-models/car-model'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css']
})
export class CreateCarFormComponent implements OnInit {
  public model: CarModel;
  public categories: string[];

  constructor(
    private carServide: CarService,
    private router : Router,
    public toastr: ToastsManager
  ) { 
    this.categories = ['волан', 'салон', 'табло', 'друго']
    this.model = new CarModel('','','','','','','','','' )
  }


  get diagnostic(): string {
    return JSON.stringify(this.model)
  }

  ngOnInit() {
  }


  createCar(){
    this.carServide.createCar(this.model)
    .subscribe(data =>{
      this.createdSuccesful()
    })
  }


  createdSuccesful(){
    this.router.navigate(['/home']);
    this.showSuccess()
  }

    showSuccess() {
    this.toastr.success('You have created car successful');
    }
}
