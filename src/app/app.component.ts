import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My Resume';
  name : string = 'Robert';
  contactInfo : string = '904-608-9449';
}
