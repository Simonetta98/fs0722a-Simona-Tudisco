import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
})
export class Error404Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.redirectToOuterSite();
  }

  redirectToOuterSite() {
    setTimeout(() => {
      window.location.href = 'https://youtu.be/C-u5WLJ9Yk4';
    }, 2000);
  }
}
