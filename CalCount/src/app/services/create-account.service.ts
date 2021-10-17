import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private httpClient:HttpClient) { }

  createUser(newUser:User):Observable<User>{
    return this.httpClient.post(environment.findCredentials, newUser) as Observable<User>
  }
}
