import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth'
import {Router} from "@angular/router";
import * as firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) {
  }

  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']); // Redirect to HomeComponent after login
      }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('registration sucessfull')
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // log out
  logout() {
    this.fireauth.signOut().then(() =>{
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err =>{
        alert(err.message);
      })
  }

  // Google login method
  loginWithGoogle() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    this.fireauth.signInWithPopup(provider).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']); // Redirect to HomeComponent after login
    }).catch(err => {
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }
}
