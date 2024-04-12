import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isCollapsed = true;


  constructor(@Inject(DOCUMENT) public doc: Document,public auth: AuthService) {}


  loginWithRedirect() {
    this.auth.loginWithRedirect();

  ;

  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }

}
