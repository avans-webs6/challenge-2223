import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public $events: BehaviorSubject<any>;

  constructor() { 
    
    //seed if needed
    if(!localStorage.getItem('events')){
      this.seedEvents();
    }

    let events = JSON.parse(localStorage.getItem('events') ?? '[]');
    this.$events = new BehaviorSubject(events);
  }

  addEvent(event: any){
    let events = JSON.parse(localStorage.getItem('events') ?? '[]');
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
    this.$events.next(events);
  }

  seedEvents(){

    console.log('Seeding events (adding 3 to localstorage)');
    
    let events = [
      { id: 1, name: 'Summer BBQ', date: '14/06/2023', time: '16:00',  location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' }, bannerUri: 'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg'},
      { id: 2, name: 'Winter BBQ', date: '14/06/2023', time: '16:00',  location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' }, bannerUri: 'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg' },
      { id: 3, name: 'Spring BBQ', date: '14/06/2023', time: '16:00',  location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' }, bannerUri: 'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg'},
    ]

    localStorage.setItem('events', JSON.stringify(events));

    return events;
  }
}
