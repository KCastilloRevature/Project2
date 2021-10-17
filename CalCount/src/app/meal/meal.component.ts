import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
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

  @Input() public date: NgbDate = new NgbDate(0,0,0);

  public user: User = {
    name: 'name',
    email: 'email@email.com',
    password: 'password',
    height: 150,
    weight: 50,
    friends: [],
    id: 1,
  };


  constructor(private mealService: MealService,private dateFormatter: NgbDateParserFormatter) {}

  public meal: Meal = {
    id: 0,
    user: this.user,
    name: '',
    calories: 0,
    description: '',
    exercise: false,
    date: this.dateFormatter.format(this.date),
  };


  public exercise: Meal = {
    id: 0,
    user: this.user,
    name: '',
    calories: 0,
    description: '',
    exercise: true,
    date: this.dateFormatter.format(this.date),
  };

  ngOnInit(): void {}

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
