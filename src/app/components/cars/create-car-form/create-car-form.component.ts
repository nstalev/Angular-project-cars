import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './../../../core/services/car/car.service'
import { CarModel } from './../../../core/models/input-models/car-model'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css']
})
export class CreateCarFormComponent implements OnInit {
  public categories: string[];

  createCar: FormGroup

  constructor(
    private fb: FormBuilder,
    private carServide: CarService,
    private router : Router,
    public toastr: ToastsManager
  ) { 
    this.categories = ['волан', 'салон', 'табло', 'друго']
  }



  ngOnInit() {
    this.createCar = this.fb.group({
      title: ['',[Validators.required]],
      description: ['',[]],
      category: ['',[]],
      url1: ['',[]],
      url2: ['',[]],
      url3: ['',[]],
      url4: ['',[]],
      url5: ['',[]],
      url6: ['',[]],
    })
  }



    submit(a,b){
      console.log(a.value)
      console.log(b)
      this.carServide.createCar(a.value)
      .subscribe(data => {
        this.createdSuccesful()
      })
    }

    createdSuccesful(){
      this.router.navigate(['/home']);
      this.toastr.success('You have created car successful');
    }
}
