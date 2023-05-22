import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/sevices/event.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {

  public $event: Observable<any> | undefined;

  //vind meer info over routes op https://angular.io/guide/router

  constructor(  private route: ActivatedRoute, public eventService: EventService) { 

  }

  ngOnInit(): void {
    let eventId = this.route.snapshot.paramMap.get('id');
    this.$event = this.eventService.getEvent(eventId);  
  }
}
