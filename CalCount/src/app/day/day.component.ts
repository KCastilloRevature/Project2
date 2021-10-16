import { Component, Input, OnInit } from '@angular/core';
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
    name: 'name',
    email: 'email@email.com',
    password: 'password',
    height: 150,
    weight: 50,
    friends: [],
    id: 1,
  };
  public friends: User[] = [
    {
      name: 'name',
      email: 'email@email.com',
      password: 'password',
      height: 150,
      weight: 50,
      friends: [],
      id: 1,
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

  constructor(private dayService: DayService,private calender: NgbCalendar) {}

  public date: NgbDate = this.calender.getToday();

  ngOnInit(): void {
    this.getAllMeals();
    console.log(this.meals);
  }

  getAllMeals() {
    return this.dayService.getAllMeals().subscribe((meals) => {
      this.meals = meals;
    });
  }

  getFriends() {
    return this.dayService.getFriends(this.sessionUser.id).subscribe((friends) => {
      this.friends = friends;
    })
  }
}
