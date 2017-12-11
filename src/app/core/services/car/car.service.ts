import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { CarModel } from './../../models/input-models/car-model';

const appKey = "" // APP KEY HERE;
const appSecret = "" // APP SECRET HERE;
const createCarUrl = `https://baas.kinvey.com/appdata/${appKey}/cars`;

@Injectable()
export class CarService {
  private currentAuthtoken : string;

  constructor(
    private http : HttpClient
  ) { }


  createCar(carModel : CarModel) : Observable<Object> {
    return this.http.post(
        createCarUrl, 
      JSON.stringify(carModel),
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

  
}