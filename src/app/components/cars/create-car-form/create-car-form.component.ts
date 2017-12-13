import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './../../../core/services/car/car.service'
import { CarModel } from './../../../core/models/input-models/car-model'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NGValidators } from 'ng-validators';

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
      title: ['',[Validators.required, Validators.minLength(3)]],
      description: ['',[Validators.required, Validators.minLength(3)]],
      category: ['',[Validators.required]],
      url1: ['',[Validators.required, Validators.minLength(5)]],
      url2: ['',[Validators.required,  Validators.minLength(5) ]],
      url3: ['',[]],
      url4: ['',[]],
      url5: ['',[]],
      url6: ['',[]],
    })
  }



    submit(a,b){

      let inputData = a.value;

      if(this.carServide.validateInput(inputData)){
        this.carServide.createCar(inputData)
        .subscribe(data => {
          this.createdSuccesful()
        })
      }
     
    }

    createdSuccesful(){
      this.router.navigate(['/home']);
      this.toastr.success('You have created car successful');
    }
}
