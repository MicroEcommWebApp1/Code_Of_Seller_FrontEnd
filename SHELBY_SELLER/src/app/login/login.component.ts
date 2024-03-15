import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  user = {
  
    emailID: '',
  password:''}

    constructor( private registerservice:LoginService , private router: Router){}

    login(loginForm: NgForm) {
      if (loginForm.invalid) {
        return; // If the form is invalid, do not proceed with registration
      }
     
      this.registerservice.loginseller(this.user).subscribe(
        response => {
          console.log('User logged in successfully:', response);
          
       
          this.router.navigate(['/sellerdashboard']); // Redirect to login page
          alert('Login successful!');
        },
        (error: HttpErrorResponse) => {
          console.error('Error logging in:', error);
          if (error.status === 400) {
            alert('Email ID or Password can\'t be empty');
          } else if (error.status === 401) {
            alert('Invalid email or password');
          } else {
            alert('An error occurred while logging in. Please try again later.');
          }
        }
      );
    }
   

}
