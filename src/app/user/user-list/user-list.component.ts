import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    new User(1, "parth715", "Parth", "Patel"),
    new User(2, "sa", "System", "Admin"),
    new User(3, "rv", "System", "Reviewer")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
