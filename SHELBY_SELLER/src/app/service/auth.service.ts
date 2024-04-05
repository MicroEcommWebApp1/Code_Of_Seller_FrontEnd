import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
 
  constructor() { }
 
  login() {
    // Perform authentication logic here, for simplicity we'll just set isLoggedIn to true
    this.isLoggedIn = true;
  }
 
  logout() {
    // Perform logout logic here
    this.isLoggedIn = false;
  }

}
