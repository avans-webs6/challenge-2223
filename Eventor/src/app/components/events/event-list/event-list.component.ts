import { Component, Input } from '@angular/core';
import { EventService } from 'src/app/sevices/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  @Input()
  events: any[] = [];

  constructor() { 

  }
}
