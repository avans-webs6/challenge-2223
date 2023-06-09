import { Component } from '@angular/core';
import { EventService } from 'src/app/sevices/event.service';

@Component({
  selector: 'app-event-create-page',
  templateUrl: './event-create-page.component.html',
  styleUrls: ['./event-create-page.component.scss']
})
export class EventCreatePageComponent {

  public event: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.resetEvent();
  }

  public onSubmit(event: any) {
    this.eventService.addEvent(event);
    this.resetEvent();
  }

  public resetEvent() {
    this.event = {
      location: {}
    };
  }
}
