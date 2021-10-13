import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import{RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

 recipe: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

  SubmitRecipe(recipe: Recipe){
    this.recipeService.SubmitRecipe(recipe).subscribe(recipe => {
      this.recipe.push();
    })
  }
}
