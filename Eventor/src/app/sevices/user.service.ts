import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { doc, onSnapshot } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase: FirebaseService) { }

  getUser(email: string){

    let docRef = doc(this.firebase.firestore, 'users', email);

    return new Observable((subscriber) => {
      const eventsSnapshot = onSnapshot(docRef, (snapshot) => {
        subscriber.next({...snapshot.data(), id: snapshot.id});
      });
    });
    
  }
}
