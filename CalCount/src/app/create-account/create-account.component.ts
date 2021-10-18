import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { CreateAccountService } from 'src/app/services/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private createAccountService:CreateAccountService, private router:Router) { }

  ngOnInit(): void {
  }

  user: User = {
    "id": 1,
    "name": "name",
    "email": "example@email.com",
    "password": "password",
    "height": 0,
    "weight": 0,
    "friends": [],
};
  
  createUser() {
    let new_user: User = this.user; //this may be a bit sketch
      this.createAccountService.createUser(new_user).subscribe(
        (data) => {
          this.user = data; //this is just a placeholder, maybe this can be deleted?
        }
      )

      this.router.navigate(['login'])
  }
}
