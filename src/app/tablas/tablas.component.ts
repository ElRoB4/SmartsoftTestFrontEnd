import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-tablas',
  //templateUrl: './tablas.component.html',
 // styleUrls: ['./tablas.component.css'],
  template: `
  <div class="example-config">
    <h5>{{ title }}</h5>
    <ul class="app-tablas">
      <li *ngFor="let event of events.reverse()">{{ event }}</li>
    </ul>
  </div>
`
  
})
export class TablasComponent {  
  
  @Input() title: string;
  @Input() events: string[];
 
}


