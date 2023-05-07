import { Component } from '@angular/core';
import { EventService } from 'src/app/sevices/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent {

  public event: any = {
    location: {}
  };

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(){

    this.eventService.addEvent(this.event);
    this.event = { location: {} };

  }
}
