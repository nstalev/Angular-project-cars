import { Component, OnInit } from '@angular/core';
import { CarService } from './../../../core/services/car/car.service'
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';



@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  public model;
  public categories: string[];
  paramsId: string;
  selectedCar1;
  sub$;

  constructor(
    private carService: CarService,
    private routeSnap: ActivatedRoute,
    private router: Router,
    public toastr: ToastsManager
    
  ) { 
    this.categories = ['волан', 'салон', 'табло', 'друго']
  }

  ngOnInit() {
    this.paramsId = this.routeSnap.snapshot.params["id"];
    this.sub$ = this.carService.getCarById(this.paramsId).subscribe(selectedCar =>{
    this.selectedCar1 = selectedCar;
   // this.showFb(this.selectedCar1)
    this.model = selectedCar
      })

  }

 

  editCar() {
    if (this.carService.validateInput(this.model)) {
      this.carService.editCar(this.model, this.paramsId).subscribe(data => {
        this.router.navigate(['/details/', this.paramsId])
        this.toastr.success('The car has been edited');
      })
    }
  }

}
