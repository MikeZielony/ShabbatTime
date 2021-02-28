import { Component, OnInit  } from '@angular/core';
import { HttpService} from './http.service';
import {registerLocaleData} from '@angular/common';



@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.css']
})
export class DisplayTimeComponent implements OnInit{

  data = [];
  ShabbatData: any;
  geoNameId = 3094802;
  long = 19.93658;
  lat = 50.06143;



  constructor(private httpService: HttpService) {
    this.httpService.getData(this.geoNameId);
  }
  ngOnInit() {
    registerLocaleData( 'pl-PL');
    this.ShabbatData = {
      items: []
    };
    this.shabbatTime();
  }

  shabbatTime() {
    this.httpService.getData(this.geoNameId).subscribe((data) => {
      console.log(data);
      this.data = data.time;
      this.setShabatTime(data);
    }, (error => {
      console.log(error);
    }));
  }

  setShabatTime(data: any) {
    console.log(data);
    this.ShabbatData = data;

  }
}
