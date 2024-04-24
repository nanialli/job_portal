import { Component, EnvironmentInjector } from '@angular/core';
import { Events } from 'src/app/events';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
event:Events = new Events(new Date(),new Date() , '')

// startDate :Date = new Date()  ;
// endDate :Date = new Date() ;
// content : string = '' ;
 constructor() {}
 addEvent() {
  // TODO : save the event record in the back end 
   console.log( this.event.content)
 }
}
