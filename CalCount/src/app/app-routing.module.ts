import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DayComponent } from './day/day.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "create-account",
    component: CreateAccountComponent
  },

  {
    path: "day",
    component: DayComponent
  }
  {
    path: "profile",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

