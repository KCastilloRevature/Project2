import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { CreateAccountService } from 'src/app/services/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private createAccountService:CreateAccountService) { }

  ngOnInit(): void {
  }

  user: User = new User("Example", "example@gmail.com", "password", 123, 234, [])
  
  createUser() {
    let new_user = new User(this.user.name, this.user.email, this.user.password, 
      this.user.height, this.user.weight, this.user.friends)
      this.createAccountService.createUser(new_user).subscribe(
        (data) => {
          this.user = data; //this is just a placeholder, maybe this can be deleted?
        }
      )
  }
}
