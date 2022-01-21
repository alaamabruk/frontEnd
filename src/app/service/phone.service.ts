import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Phone } from '../model/phone.model';
//import { Params } from '../model/params.model';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  url = 'http://localhost:8080/internal/v1/phones';

  constructor(private http:HttpClient) { }



  getPhones(country:string , valid:boolean)  {
  const parameters = {
      'country': country,
      'valid': valid
    };

    return this.http.get(this.url , {params: parameters});
  }
}


