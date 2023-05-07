import { Component } from '@angular/core';
import { EventService } from 'src/app/sevices/event.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent {
  public showform = false;

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
    //ik heb er voor gekozen om pages verantwoordelijk te maken voor het ophalen van data
    //deze 'smeren' de data dan uit over de juiste componenten
    this.eventService.$events.subscribe(events => {
      console.log('new updates1');
    })
  }
}
