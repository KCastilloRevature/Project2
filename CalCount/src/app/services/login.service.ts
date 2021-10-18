import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  findCredentials(user: User):Observable<User>{
    return this.httpClient.post(environment.findCredentials, user) as Observable<User>;
  }
}
