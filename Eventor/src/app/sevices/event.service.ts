import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, mergeMap, of } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { doc, collection, onSnapshot, CollectionReference, addDoc, where, query, Query } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsRef: any;

  private $currentEventId = new BehaviorSubject<any>(null);

  public $currentEventParticipants: Observable<any> = of(null);
  public $currentEvent: Observable<any> = of(null);
  public $events: Observable<any> = of([]);

  constructor(private firebase: FirebaseService) {

   
    this.firebase.auth.onAuthStateChanged((user) => {

      if(!user) return;
      
      //this.eventsRef = collection(this.firebase.firestore, 'events');
      this.eventsRef = query(collection(firebase.firestore, 'events'), where('owner', '==', user.uid));
      let eventsSnapshot;

      this.$events = new Observable((subscriber) => {
        eventsSnapshot = onSnapshot(this.eventsRef, (snapshot: any) => {
          subscriber.next(snapshot.docs.map((doc: any) => { return {...doc.data(), id: doc.id}; }));
        });
      });

    });

  }

  getEvent(id: any){

    let docRef = doc(this.firebase.firestore, 'events', id);

    return new Observable((subscriber) => {
      const eventsSnapshot = onSnapshot(docRef, (snapshot) => {
        subscriber.next({...snapshot.data(), id: snapshot.id});
      });
    });
  }

  addEvent(event: any){
    //addDoc(this.eventsRef, event)
  }

  selectEvent(id: any){
    this.$currentEventId.next(id);
  }

}
