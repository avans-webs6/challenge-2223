import { Component } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';
import { FirebaseService } from 'src/app/sevices/firebase.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {

  public email : any;
  public password : any;
  public user: any;

  constructor(public firebase: FirebaseService) { 
    this.firebase.auth.onAuthStateChanged((user) => {
      this.user = user;
    })
  }

  login(){

    signInWithEmailAndPassword(this.firebase.auth, this.email, this.password);

  }

  logout(){
    this.firebase.auth.signOut();
  }

}
