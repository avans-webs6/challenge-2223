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

  public participantname: String = "";
  public groupName: String = "";
  public participants: Array<any> = [
    { id: 0, name: "Piet" },
    { id: 1, name: "Jan" },
  ]

  public groups: Array<any> = [
    {name: "Groep 1", participants: []}, 
    {name: "Groep 2", participants: []}
  ]

  //vind meer info over routes op https://angular.io/guide/router

  constructor(  private route: ActivatedRoute, public eventService: EventService) { 

  }

  addParticipant(){
    let newId = this.participants.map(p => p.id).sort()[0]
    this.participants.push({ id: newId, name: this.participantname});
    this.participantname = "";
  }

  addGroup(){
    this.groups.push({ name: this.groupName, participants: []});
    this.groupName = "";
  }

  ngOnInit(): void {
    let eventId = this.route.snapshot.paramMap.get('id');
    this.$event = this.eventService.getEvent(eventId);  
  }

  addToGroup(group: any, event: any)
  {
    let participant = event.data;

    //remove from previous group or main list
    if(participant.groupName != undefined)
    {
      let previousgroup = this.groups.find(g => g.name == participant.groupName)
      previousgroup.participants.splice(previousgroup.participants.indexOf(participant), 1);
    } else {
      let index = this.participants.indexOf(participant)
      this.participants.splice(index, 1);
    }

    participant.groupName = group.name;
    group.participants.push(participant);
    //remove from other group
  }
}
