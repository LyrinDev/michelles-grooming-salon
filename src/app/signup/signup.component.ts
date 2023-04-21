import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService,
    private router: Router){}

  isLoading = false;

  onSubmit(signupForm: NgForm) {
    if (!signupForm.valid) {
      return;
    }

    let email = '';
    let password = '';

    email = signupForm.value.email;
    password = signupForm.value.passwod;

    console.log(signupForm);
    this.authService.signup(email, password).subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/pets']);
      }
      // errorMessage => {
      //   console.log(errorMessage);
      //   // this.error = errorMessage;
      //   // this.showErrorAlert(errorMessage);
      //   this.isLoading = false;
      // }
    );
  }
}