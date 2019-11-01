import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'win-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  formDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.formDisabled = false;
  }

}
