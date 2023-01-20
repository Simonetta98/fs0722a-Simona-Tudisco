import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:4201/users"
  users: User[] = []

  getUserById(id: any) {
    return this.users.find(u=>u.id==id)
  }
  getUsers() {
    return this.users;
  }

  constructor() {
    this.fetchData()
   }

  fetchData() {
    fetch(this.url).then(res=>res.json()).then((u:User[])=>{
      console.log(u);
      this.users = u
    })
  }
}
