import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    
  ]
  constructor(
    private usrsrv: UserService
  ) { }

  ngOnInit(): void {
    this.usrsrv.list().subscribe(
      res => {
        console.debug("Users:", res)
        this.users = res
      },
      err => {
        console.error(err);
      }
    );
  }

}
