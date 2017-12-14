import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {MatButtonModule} from '@angular/material/button';

import { CarService } from './../../../core/services/car/car.service'
import { AuthenticationService } from './../../../core/services/authentication/auth.service'

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit, OnDestroy {

  currentCar;
  paramsId: string;
  listPictures = [];
  sub$;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private carService: CarService,
              private routeSnap: ActivatedRoute,
              private router : Router,
              private authService : AuthenticationService
  ) { }

  ngOnInit() {
    this.paramsId = this.routeSnap.snapshot.params["id"];
    
    this.sub$ = this.carService.getCarById(this.paramsId).subscribe(selectedCar =>{
    this.currentCar = selectedCar;
    this.generateList(this.currentCar)
    })


    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        previewInfinityMove:true,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnEsc: true,
        previewCloseOnClick: true
      }
    ];
    
    this.galleryImages = this.listPictures
  }
  ngOnDestroy(){
    this.sub$.unsubscribe();
  }


  generateList(data){
    let arrayOfKeys = Object.keys(data)
    for(let key of arrayOfKeys){
      if(key.startsWith('url') && data[key].length>1){
        let obj = {
          small: data[key],
          medium: data[key],
          big: data[key],
        }
        this.listPictures.push(obj)
      }
    }
  }

  navigateToEdit(){
    this.router.navigate([`./edit/${this.currentCar._id}`])
  }
  deleteCar(){
   
    this.router.navigate([`./delete/${this.currentCar._id}`])
  }

}
