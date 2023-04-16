import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  @Input()
  events: any[] = [];

  constructor() { 
    
    //even testen via de constructor is fijn!
    //Shoutout naar Github Copilot voor het verzinnen van de voorbeeld data ;)
    this.events = [
      { id: 1, name: 'Summer BBQ', date: '14/06/2023', time: '16:00',  location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' }, bannerUri: 'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg'},
      { id: 2, name: 'Winter BBQ', date: '14/06/2023', time: '16:00',  location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' }, bannerUri: 'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg' },
      { id: 3, name: 'Spring BBQ', date: '14/06/2023', time: '16:00',  location: { address: '5246GT', city: 'Rosmalen', country: 'Nederland' }, bannerUri: 'https://www.shutterstock.com/image-photo/assorted-grilled-meat-vegetables-on-260nw-1807847068.jpg'},
    ]

    //check if localstorage has events
    let events = JSON.parse(localStorage.getItem('events') ?? '[]');

    if(events.length <= 0){
      events = this.seedEvents();
    }
    
    this.events = events;
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
