import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../models/Meal';
import { User } from '../models/User';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class MealComponent implements OnInit {
  public meals: Meal[] = [];

  public mealForm: boolean = false;
  public exerciseForm: boolean = false;

  @Input() public date: NgbDate = this.calender.getToday();

  public user: User = {
    name: 'name',
    email: 'email@email.com',
    password: 'password',
    height: 150,
    weight: 50,
    friends: [],
    id: 1,
  };


  constructor(private mealService: MealService, private calender: NgbCalendar,private dateFormatter: NgbDateParserFormatter) {}

  public meal: Meal = {
    id: 0,
    user: this.user,
    name: '',
    calories: 0,
    description: '',
    exercise: false,
    date: this.date.year+"-"+this.date.month+"-"+this.date.day,
  };


  public exercise: Meal = {
    id: 0,
    user: this.user,
    name: '',
    calories: 0,
    description: '',
    exercise: true,
    date: this.date.year+"-"+this.date.month+"-"+this.date.day,
  };

  ngOnInit(): void {
    console.log(this.date)
    console.log(this.exercise.date)
  }

  expandMealForm() {
    if (this.mealForm == false) {
      this.mealForm = true;
    }else{
    this.mealForm = false;
    }
  }

  expandExerciseForm() {
    if ((this.exerciseForm == false)) {
      this.exerciseForm = true;
    } else {
    this.exerciseForm = false;
    }
  }

  onSubmitMeal() {
    this.mealForm = false;
  }

  onSubmitExercise() {
    this.exerciseForm = false;
  }

  newMeal() {
    this.mealService.newMeal(this.meal).subscribe();
  }
  newExercise() {
    this.exercise.calories = this.exercise.calories * -1;
    this.mealService.newMeal(this.exercise).subscribe();
  }
}
