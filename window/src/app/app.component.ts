import { Component } from '@angular/core';

@Component({
  selector: 'win-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'window';
  
  courses = [{
    id: 100,
    name: "How to use Git",
    date: "01/10/2019",
    location: "Park Inn"
  },
  {
    id: 100,
    name: "Use Git Properly",
    date: "02/10/2019",
    location: "Park Inn"
  },
  {
    id: 100,
    name: "Just can't Git this",
    date: "03/10/2019",
    location: "Park Inn"
  },
  {
    id: 100,
    name: "Na Na Na Na",
    date: "20/10/2019",
    location: "Park Inn"
  },
]

}
