import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Course} from '../course';
import {Observable} from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'win-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private http: HttpClient) {}

  courses: Observable<Course[]> = this.http.get<Course[]>('/api/courses');

  public newCourse: Course;

  public addCourse(): void {
    const courseToAdd = this.newCourse;
    this.newCourse = new Course();
    this.courses = this.http.post<Course[]>('/api/addcourse', courseToAdd);
  }

  ngOnInit(): void {
    this.newCourse = new Course();
  }
}
