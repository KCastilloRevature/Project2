import { Component, OnInit } from '@angular/core';
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

  public user: User = {
    "name": "name",
    "email": "email@email.com",
    "password": "password",
    "height": 150,
    "weight": 50,
    "friends": [],
    "id": 1
}

  public meal: Meal = {
    id: 0,
    user: this.user,
    name: '',
    calories: 0,
    description: '',
    exercise: false,
    date: '',
  };

  public exercise: Meal = {
    id: 0,
    user: this.user,
    name: '',
    calories: 0,
    description: '',
    exercise: true,
    date: '',
  };

  constructor(private mealService: MealService) {}

  ngOnInit(): void {}

  expandMealForm(){
    this.mealForm = true;
  }

  onSubmitMeal() {
    this.mealForm = false;
  }

  expandExerciseForm(){
    this.exerciseForm = true;
  }

  onSubmitExercise() {
    this.exerciseForm = false;
  }


  newMeal() {
    console.log("component function");
    this.mealService.newMeal(this.meal).subscribe();
  }
  newExercise() {
    this.exercise.calories = this.exercise.calories*-1;
    this.mealService.newMeal(this.exercise).subscribe();
  }
}
