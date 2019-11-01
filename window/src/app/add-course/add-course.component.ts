import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../course';
import {Observable} from 'rxjs';
import { FormsModule } from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'win-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

   public newCourse: Course;

  constructor(private data: DataService) {}

  public addCourse() {
    const courseToAdd = this.newCourse;
    this.data.addCourse(courseToAdd);
    this.newCourse = new Course();
  }

  ngOnInit(): void {
    this.newCourse = new Course();
  }
}
