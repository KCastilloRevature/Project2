import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  findUser(id:number):Observable<User>{
    return this.httpClient.get(environment.findUser) as Observable<User>;
  }

  addFriend(id:number):Observable<User>{
    return this.httpClient.put(environment.addFriend, id) as Observable<User>;
  }

  findUserFriends(id:number):Observable<User[]>{
    return this.httpClient.get(environment.findUserFriends) as Observable<User[]>;
  }
}
