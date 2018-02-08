import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: string="";
  error: any;
  constructor(public auth: AngularFireAuth, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.auth.auth
        .createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(
        (success) => {
          console.log(success);
          this.router.navigate(['/members'])
        })
        .catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
        )
    }
  }

}
