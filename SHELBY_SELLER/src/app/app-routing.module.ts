import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path:'',
  component : BodyComponent,
},
{
  path:'register',
  component : RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
