import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { RemoveCourseComponent } from './remove-course/remove-course.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    task/RemoveCourseUI
    EditCourseComponent,
    RemoveCourseComponent
    DetailComponent,
    ListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
