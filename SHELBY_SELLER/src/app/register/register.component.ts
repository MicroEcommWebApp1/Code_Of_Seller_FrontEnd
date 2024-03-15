import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    name:'',
    emailID: '',
    companyName:'',
    gstNumber:'',
    phoneNumber:'',
    companyAddress:'',
    password: '',
  };
  constructor( private registerservice:RegisterService , private router: Router){}

  register(registerForm : NgForm) {
    if (registerForm.invalid) {
      return; // If the form is invalid, do not proceed with registration
    }
   
    this.registerservice.registerseller(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        
     
        this.router.navigate(['/login']); // Redirect to login page
        alert('Registration successful! Please login with your credentials.');
      },
      (error: HttpErrorResponse) => {
        console.error('Error registering user:', error);
        if (error.status === 409) {
          console.error('Email already exists.');
          alert('EmailID already exists. Please use a different emailID.');
        } 
        else if(error.status === 500){
          console.error('Phone Number already exists.');
          alert('Phone Number already exists. Please use a different Phone Number.');
        }
        else {
          // Handle other types of errors
          alert('Error registering user: ' + error.message);
        }
      }
    );
  }
 

}

