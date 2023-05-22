import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { doc, collection, onSnapshot, CollectionReference, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsRef: CollectionReference<any>;

  public $events: Observable<any> = of([]);

  constructor(private firebase: FirebaseService) {

    this.eventsRef = collection(firebase.firestore, 'events');
    
    this.$events = new Observable((subscriber) => {
      const eventsSnapshot = onSnapshot(this.eventsRef, (snapshot) => {
        subscriber.next(snapshot.docs.map(doc => { return {...doc.data(), id: doc.id}; }));
      });
    });
  }

  addEvent(event: any){
    addDoc(this.eventsRef, event)
  }
    

  getEvent(id: any){

    let docRef = doc(this.firebase.firestore, 'events', id);

    return new Observable((subscriber) => {
      const eventsSnapshot = onSnapshot(docRef, (snapshot) => {
        subscriber.next({...snapshot.data(), id: snapshot.id});
      });
    });
  }
}
