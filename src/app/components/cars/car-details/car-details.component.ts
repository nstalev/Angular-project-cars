import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarService } from './../../../core/services/car/car.service'
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car;
  paramsId: string;
  listPictures = [];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private carService: CarService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramsId = this.route.snapshot.params["id"];
    
    this.carService.getCarById(this.paramsId).subscribe(data =>{
    this.car = data;
    this.generateList(this.car)
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


  generateList(data){
    let arrayOfKeys = Object.keys(data)
    for(let key of arrayOfKeys){
      if(key.startsWith('url') && data[key]!==null){
        let obj = {
          small: data[key],
          medium: data[key],
          big: data[key],
        }
        this.listPictures.push(obj)
      }
    }
  }


}
