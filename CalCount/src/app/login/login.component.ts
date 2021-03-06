import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) {
  }

  user: User = {
    "name": "name",
    "email": "email@email.com",
    "password": "password",
    "height": 150,
    "weight": 50,
    "friends": [],
    "id": 1
};
  updatedUser: User = {
    "name": "name",
    "email": "email@email.com",
    "password": "password",
    "height": 150,
    "weight": 50,
    "friends": [],
    "id": 1
};

  ngOnInit(): void {
  }

  @Output()
  updateUserEvent = new EventEmitter<User>();

  findCredentials(){
    this.loginService.findCredentials(this.user).subscribe(
      (data: User) => {
        this.user = data;
      }
    )
    this.updateUserState()

    this.router.navigate(['day'])
  }

  updateUserState(){
    this.updateUserEvent.emit(this.user);
  }
}

