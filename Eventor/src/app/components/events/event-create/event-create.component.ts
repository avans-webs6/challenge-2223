import { Component } from '@angular/core';
import Event from '../../../Event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent {

  public event: Event = this.getEmptyEvent();

  constructor() { }

  ngOnInit(): void {
  }

  saveEvent(): void {
    let events: Event[] = JSON.parse(localStorage.getItem('events') ?? '[]');
    this.event.id = events.length + 1;
    events.push(this.event);

    localStorage.setItem('events', JSON.stringify(events));
    this.event = this.getEmptyEvent();
  }

  private getEmptyEvent(): Event {
    return {
      id: 0,
      name: '',
      bannerUri: '',
      date: '',
      time: '',
      location: {
        address: '',
        city: '',
        country: ''
      }
    };
  }
}