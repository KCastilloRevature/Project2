import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeekPageComponent } from './week-page/week-page.component';
import { DayPageComponent } from './day-page/day-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekPageComponent,
    DayPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
