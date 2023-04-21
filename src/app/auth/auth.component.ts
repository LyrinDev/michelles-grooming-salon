import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isAdminMode = false;
  isLoading = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  onSubmit(form: NgForm){
    if (!form.valid) {
      return;
    }

    let email = '';
    let password = '';

    email = form.value.email;
    password = form.value.passwod;

    console.log(form);
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

  toggleLogin() {
    this.isAdminMode = !this.isAdminMode;
  }

}
