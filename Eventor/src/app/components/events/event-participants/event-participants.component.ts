import { Component, Input } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';
import { EventService } from 'src/app/sevices/event.service';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent {

  @Input() 
  public participants: any[];

  //lets go
  constructor(private eventService: EventService, private userService: UserService) { 
  
  }

  ngOnInit(): void {

    // this.eventService.getEvent(this.eventId).subscribe((event: any) => { //SMART RAPID KISS AI BLOCKCHAIN GAI
    
    //     this.userService.getUser(event.owner).subscribe((owner) => {

    //       this.owner = owner;

    //     });
    // })




  }
}
