import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuardFn } from '@auth0/auth0-angular';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent,canActivate: [authGuardFn]},
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
