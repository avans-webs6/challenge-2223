import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

  //Hier gaan we het later nog over hebben! :)
  @Input() event: any;
  
}
