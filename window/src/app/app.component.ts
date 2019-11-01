import { Component } from '@angular/core';
import { Employee } from './employee';
import { DataService } from './data.service';

@Component({
  selector: 'win-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(dataService: DataService) {
        this.data = dataService;
    }
    title = 'window';
    thisEmployee: Employee;
    data: DataService;

}
