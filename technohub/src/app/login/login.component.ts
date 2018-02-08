import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {

error: any;


  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(
      (success) => {
        this.router.navigate['/members']
      }).catch(
      (err) => {
        this.error = err;
      }
      )
  }

  loginFb() {
    this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then(
      (success) => {
        this.router.navigate['/members']
      }).catch(
      (err) => {
        this.error = err;
      }
      )
  }

  loginEmail(formData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(
      (sucess) => {
        this.router.navigate['/members']
      })
      .catch(
      (err) => {
        this.error = err;
      }
      )
  }
}
