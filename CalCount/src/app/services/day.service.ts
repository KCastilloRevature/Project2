import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/Meal';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  url: string = 'http://localhost:8080/meals';

  furl: string = 'http://localhost:8080/users/'

  getAllMeals(): Observable<Meal[]> {
    console.log("service function");
    return this.http.get<Meal[]>(this.url,this.httpOptions)
  }

  getFriends(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.furl + id +'/friends',this.httpOptions);
  }
}
