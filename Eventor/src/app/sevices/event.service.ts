import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { doc, collection, onSnapshot } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //private eventsRef: AngularFireList<any> = null;

  public $events: Observable<any> = of([]);

  constructor(firebase: FirebaseService) {

    const eventsCol = collection(firebase.firestore, 'events');
    


    this.$events = new Observable((subscriber) => {
      const eventsSnapshot = onSnapshot(eventsCol, (snapshot) => {
        subscriber.next(snapshot.docs.map(doc => doc.data()));
      });
    });

    
    // //seed if needed
    // if(!localStorage.getItem('events')){
    //   this.seedEvents();
    // }

    // // let events = JSON.parse(localStorage.getItem('events') ?? '[]');
    // // this.$events = new BehaviorSubject(events);

    //this.eventsRef = this.db.list('event-list');
    //this.$events = this.eventsRef.valueChanges();
  }

  addEvent(event: any){
    // let events = JSON.parse(localStorage.getItem('events') ?? '[]');
    // events.push(event);
    // localStorage.setItem('events', JSON.stringify(events));
    // this.$events.next(events);
  }
}
