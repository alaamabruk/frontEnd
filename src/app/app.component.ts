import { Component, OnInit} from '@angular/core';
import { PhoneService } from './service/phone.service';
import { Phone } from './model/phone.model';
//import { Params } from './model/params.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  phonesData: any;

   valid : boolean =  false;
   country : string =  "Morocco";



  constructor(private phones:PhoneService) {
   }

    ngOnInit(){
     this.phones.getPhones(this.country , this.valid)
     .subscribe( (response) => {
     console.log(response);
     this.phonesData = response;
     });
     }

}
