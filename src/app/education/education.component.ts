import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: string = "I went to school X, Y, Cincy Code IT, and Z";
  constructor() { }

  ngOnInit() {
  }

}
