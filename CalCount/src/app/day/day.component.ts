import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/Meal';
import { DayService } from '../services/day.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  public meals: Meal[] = [];

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
