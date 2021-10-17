import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() public sessionUser: User = {
    "name": "name",
    "email": "email@email.com",
    "password": "password",
    "height": 150,
    "weight": 50,
    "friends": [],
    "id": 1
};

public friends: User[] = [
  {
    "id": 3,
    "name": "name",
    "email": "email@email.com",
    "password": "password",
    "height": 150,
    "weight": 50,
    "friends": [
        1,
        2
    ]
}
];

user: User = this.sessionUser;

friend: User = this.sessionUser;

friendList: User[] = this.friends;

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.findUser(this.user.id);
    this.findUserFriends(this.user.id);
  }

  findUser(id:number){
    this.profileService.findUser(this.user.id).subscribe(
      (data) => {
        this.user = data;
      }
    )
  }

  findUserFriends(id:number){
    this.profileService.findUserFriends(this.user.id).subscribe(
      (data) => {
        this.friendList = data;
      }
    )
  }

  addFriend(id:number){
    this.profileService.findUser(this.friend.id).subscribe(
      (data) => {
        this.friend = data;
      }
    )
  }

}
