import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/Meal';
import { User } from '../models/User';
import { DayService } from '../services/day.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  public user: User = {
    "name": "name",
    "email": "email@email.com",
    "password": "password",
    "height": 150,
    "weight": 50,
    "friends": [],
    "id": 1
}


  public friends: User[] = [{
    "name": "name",
    "email": "email@email.com",
    "password": "password",
    "height": 150,
    "weight": 50,
    "friends": [],
    "id": 1
}];

public meals: Meal[] = [{
  id: 0,
  user: this.user,
  name: '',
  calories: 0,
  description: '',
  exercise: false,
  date: '',
}];

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.getAllMeals()
    console.log(this.meals)
  }

  getAllMeals() {
    return this.dayService.getAllMeals().subscribe(meals => {
      this.meals = meals
    });
  }
}
