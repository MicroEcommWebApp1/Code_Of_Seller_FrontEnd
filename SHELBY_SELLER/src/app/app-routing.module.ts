import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Body2Component } from './body2/body2.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddproductComponent } from './addproduct/addproduct.component';




const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
},
{
  path:'',
  component : Body2Component,
},

{
  path:'addproduct',
  component : AddproductComponent
},
{
  path:'register',
  component : RegisterComponent
},
{
  path:'profile',
  component : ProfileComponent
},
{
  path:'forgotpassword',
  component : ForgotpasswordComponent
},
{
  path:'sellerdashboard',
  component : SellerdashboardComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
