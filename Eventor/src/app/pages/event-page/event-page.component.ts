import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Event from 'src/app/Event';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {

  public event: Event | undefined;

  //vind meer info over routes op https://angular.io/guide/router

  constructor(  private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.event = this.getEvent();
  }

  getEvent(){
    let events = JSON.parse(localStorage.getItem('events') ?? '[]') as Event[];
    let event = events.find((e: Event) => e.name === this.route.snapshot.paramMap.get('name'));
    return event;
  }
}
