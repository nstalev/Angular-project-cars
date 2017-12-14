import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CarService } from './../../../core/services/car/car.service'
import { AuthenticationService } from './../../../core/services/authentication/auth.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  template: '',
})
export class DeleteCarComponent implements OnInit {
  paramsId: string;
  
  constructor(
    private carService: CarService,
    private routeSnap: ActivatedRoute,
    private router: Router,
    public toastr: ToastsManager
  ) { }

  ngOnInit() {
    this.paramsId = this.routeSnap.snapshot.params["id"];
    this.carService.deleteCar(this.paramsId).subscribe(data =>{

      this.router.navigate([`./cars`])
      this.toastr.success('The item have been deleted')
    })
  }

}
