import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbDate , NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Meal } from '../models/Meal';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private http: HttpClient, private dateFormatter: NgbDateParserFormatter) { }

  url: string = 'http://localhost:8080/meals/';

  furl: string = 'http://localhost:8080/users/'

  getAllMeals(user: User, date: NgbDate): Observable<Meal[]> {
     let dateString = this.dateFormatter.format(date);
     console.log(user.id)
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('Date', dateString).set('user_Id', user.id)
    }
    return this.http.get<Meal[]>(this.url,httpOptions)
  }

  getFriends(id: number): Observable<User[]> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<User[]>(this.furl + id +'/friends',httpOptions);
  }
}
