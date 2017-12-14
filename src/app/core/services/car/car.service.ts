import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { CarModel } from './../../models/input-models/car-model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { appKey } from './../authInfo/appKey'
import { appSecret } from './../authInfo/appSecret'

const createCarUrl = `https://baas.kinvey.com/appdata/${appKey}/cars`;

@Injectable()
export class CarService {
  private currentAuthtoken : string;

  constructor(
    
    private http : HttpClient,
    public toastr: ToastsManager
  ) { 
    
  }


  createCar(carModel : CarModel) : Observable<Object> {
    return this.http.post(
        createCarUrl, 
      JSON.stringify(carModel),
      { 
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  editCar(carModel : CarModel, carId: string) : Observable<Object> {
    return this.http.put(
        createCarUrl + '/' + carId,  
      JSON.stringify(carModel),
      { 
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  getAllCars() : Observable<Object> {
    return this.http.get(
        createCarUrl + '?query={}&sort={"_kmd.ect": -1}', 
      { 
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }


  getCarById(id): Observable<Object> {
    return this.http.get(
      createCarUrl + '/' + id, 
    { 
      headers: this.createAuthHeaders('Kinvey')
    }
  )
  }


  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }


  validateInput(data){
    if(!data['url1'].startsWith('http') || !data['url2'].startsWith('http') ){
      this.toastr.error('Invalid input!!! All Links should start with "http"');
      return false
  }if(Number(data['description'].length) < 7){
    this.toastr.error('Invalid input!!! Description length should be more than 7 symbols');
    return false
  }if(Number(data['title'].length) < 3){
    this.toastr.error('Invalid input!!! Title length should be more than 3 symbols');
    return false
  }
  if((data['url3'].length > 0 && !data['url3'].startsWith('http'))
      || (data['url4'].length > 0 && !data['url4'].startsWith('http'))
      || (data['url5'].length > 0 && !data['url5'].startsWith('http'))
      || (data['url6'].length > 0 && !data['url6'].startsWith('http'))
    ){
    this.toastr.error('All Links should start with "http"');
    return false
  }

    return true;
  }

  
}