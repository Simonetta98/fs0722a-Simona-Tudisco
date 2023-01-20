import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged: boolean = false;

  nomeUser = "";

  constructor(private as:AuthService) { }

  ngOnInit(): void {
    this.as.authObs.subscribe((res)=>{
      if(res) {
        this.logged = true
        this.nomeUser = res.user.name
      } else {
        this.logged = false,
        this.nomeUser = ""
      }
    })
  }

  logout() {
    this.as.logout();
  }

}
