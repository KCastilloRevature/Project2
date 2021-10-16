import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  updateUserEvent = new EventEmitter<User>();
}
