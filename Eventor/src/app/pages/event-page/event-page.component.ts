import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {

  public event: any;

  //vind meer info over routes op https://angular.io/guide/router

  constructor(  private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.event = this.getEvent();
  }

  getEvent(){
    let events = JSON.parse(localStorage.getItem('events') ?? '[]');
    let event = events.find((e: any) => e.name === this.route.snapshot.paramMap.get('name'));
    return event;
  }
}
