import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MealComponent } from './meal/meal.component';
import { DayComponent } from './day/day.component';

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    MealComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
