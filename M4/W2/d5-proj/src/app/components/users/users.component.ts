import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[] = []

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.users = this.us.getUsers()
    console.log(this.users)
   }
  }

