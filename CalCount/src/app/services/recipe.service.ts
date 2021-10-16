import { RecipeResponse } from './../models/RecipeResponse';
import { Meal } from './../models/Meal';
import { Recipe } from './../models/Recipe';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const recipeUrl: string = 'https://api.edamam.com/api/nutrition-details';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params: new HttpParams({
      fromObject: {
        app_id: '81745dac',
        app_key: '745f0ac339a4428bfbe72ce83e81f16b',
      },
    }),
  };

  constructor(private http: HttpClient) {}

  SubmitRecipe(recipe: Recipe): Observable<Object> {
    return this.http
      .post<RecipeResponse>(recipeUrl, recipe, this.httpOptions)
  }
}
