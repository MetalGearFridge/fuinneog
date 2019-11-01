import { Course } from './course';
import {Component, OnInit, Input } from '@angular/core';

export class CourseOnClick {
    @Input() course: Course;
    constructor() {}
    ngOnInit(){}
}
