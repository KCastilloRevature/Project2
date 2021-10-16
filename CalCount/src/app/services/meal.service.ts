import { Injectable } from '@angular/core';
import { Meal } from '../models/Meal';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  url: string = 'http://localhost:8080/meals/new';

  newMeal(meal: Meal): Observable<Object> {
    return this.http.post(this.url, meal)
  }
}
