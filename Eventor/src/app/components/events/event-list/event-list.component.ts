import { Component, Input, OnInit } from '@angular/core';
import Event from '../../../Event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  @Input() events: Event[] = [];

  ngOnInit(): void {
    const storedEvents = JSON.parse(
      localStorage.getItem('events') || '[]'
    ) as Event[];

    if (storedEvents.length <= 0) {
      const seededEvents = this.seedEvents();
      this.events = seededEvents;
      localStorage.setItem('events', JSON.stringify(seededEvents));
    } else {
      this.events = storedEvents;
    }
  }

  private seedEvents(): Event[] {
    console.log('Seeding events (adding 3 to local storage)');

    return [
      {
        id: 1,
        name: 'Summer BBQ',
        date: '14/06/2023',
        time: '16:00',
        location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' },
        bannerUri:
          'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg',
      },
      {
        id: 2,
        name: 'Winter BBQ',
        date: '14/06/2023',
        time: '16:00',
        location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' },
        bannerUri:
          'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg',
      },
      {
        id: 3,
        name: 'Spring BBQ',
        date: '14/06/2023',
        time: '16:00',
        location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' },
        bannerUri:
          'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg',
      },
    ];
  }
}