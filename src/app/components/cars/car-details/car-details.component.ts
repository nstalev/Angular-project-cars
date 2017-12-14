import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarService } from './../../../core/services/car/car.service'
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


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
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramsId = this.route.snapshot.params["id"];
    
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


}
