import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    name: '',
    emailID: '',
  
    companyName:'',
    gstNumber:'',
    phoneNumber:'',
    companyAddress:'',
    password: '',
  };
  constructor( private registerservice:RegisterService, private fb:FormBuilder , private router: Router){}

  register() {
    this.registerservice.registerseller(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        
     
        this.router.navigate(['/login']); // Redirect to login page
        alert('Registration successful! Please login with your credentials.');
      },
      error => {
        console.error('Error registering user:', error);
        // Handle error, show error message, etc.
      }
    );
  }
 

  

}
