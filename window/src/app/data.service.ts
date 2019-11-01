import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    employees = this.http.get<Employee[]>('/api/employee');

  public addEmployee(newEmployee: Employee): void {
        this.employees = this.http.post<Employee[]>('/api/addemployee', newEmployee);
    }

  public addCourse(newCourse: Course): void {
    // this.courses.subscribe(c => console.log(c));
    // const courseToAdd = this.newCourse;
    // this.newCourse = new Course();
    console.log(newCourse);
    this.http.post<Course>('/api/addcourse', newCourse).subscribe();
  }
}
