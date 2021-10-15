import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) {}

  findCredentials():Observable<boolean>{
    return this.httpClient.get(environment.findCredentials) as Observable<boolean>;
  }
}
