import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Component({
  selector: 'win-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'window';
  employees = this.http.get<Employee[]>('/api/employee');
}
