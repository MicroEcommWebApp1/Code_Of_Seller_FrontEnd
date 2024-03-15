import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { Body2Component } from './body2/body2.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import{HttpClientModule} from "@angular/common/http";
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component'



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,

    LoginComponent,
    RegisterComponent,
  
    Body2Component,
    ForgotpasswordComponent,
    SellerdashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
