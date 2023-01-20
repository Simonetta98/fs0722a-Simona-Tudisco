import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user:User|undefined

  constructor(private us:UserService, private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((p)=>{
      console.log(p['id']);
      this.user = this.us.getUserById(p['id'])
    })
  }

}
