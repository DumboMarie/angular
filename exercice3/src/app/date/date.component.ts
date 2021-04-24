import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  date: string;

  constructor() {
    setInterval(() => {
      let currentDate=new Date();
      this.date = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
    }, 1000);
  }

}
