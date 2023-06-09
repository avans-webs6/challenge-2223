import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Firestore, getFirestore } from 'firebase/firestore';
import { getAuth, Auth} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  public firestore: Firestore;
  public auth: Auth;
  
  constructor() { 

    const firebaseConfig = environment.firebaseConfig;
    const app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(app);

    this.auth = getAuth(app);
  }
}
