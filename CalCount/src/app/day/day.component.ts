import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Meal } from '../models/Meal';
import { User } from '../models/User';
import { DayService } from '../services/day.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
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

  public meals: Meal[] = [
    {
      id: 0,
      user: this.sessionUser,
      name: 'Test Name',
      calories: 0,
      description: 'Test Description',
      exercise: false,
      date: '',
    },
  ];
  user: User = this.sessionUser;

  oldUser: User = this.sessionUser;

  constructor(private dayService: DayService, private calender: NgbCalendar) {}

  @Input() public date: NgbDate = this.calender.getToday();

  public oldDate: NgbDate = this.date;

  ngOnInit(): void {
    console.log(this.sessionUser.id);
    this.getAllMeals(this.sessionUser, this.date);
  }

  ngDoCheck(): void {
    if (this.date !== this.oldDate) {
      this.oldDate = this.date;
      this.getAllMeals(this.user, this.date);
    }
    if (this.user !== this.oldUser) {
      this.oldUser = this.user;
      this.getAllMeals(this.user,this.date)
    }
  }

  getAllMeals(user: User, date: NgbDate) {
    console.log(user.id);
    return this.dayService.getAllMeals(user, date).subscribe((meals) => {
      this.meals = meals;
    });
  }

  getFriends() {
    return this.dayService
      .getFriends(this.sessionUser.id)
      .subscribe((friends) => {
        this.friends = friends;
      });
  }

  changeUser(user: User) {
    this.user = user;
  }
}
