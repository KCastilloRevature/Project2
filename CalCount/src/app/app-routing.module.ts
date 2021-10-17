import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { WeekPageComponent } from './components/week-page/week-page.component';

const routes: Routes = [
  {
    path: "/login",
    component: LoginComponent
  },

  {
    path: "/create-account",
    component: CreateAccountComponent
  },

  {
    path: "/week-page",
    component: WeekPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

