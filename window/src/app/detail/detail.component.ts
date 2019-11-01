import { Course } from '../course';
import {Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'course-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
  })

export class CourseOnClick {
    @Input() course: Course;
    constructor() {}
    ngOnInit(){}
}
