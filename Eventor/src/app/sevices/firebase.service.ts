import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  public firestore: Firestore;

  
  constructor() { 

    const firebaseConfig = environment.firebaseConfig;
    const app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(app);
  }
}
