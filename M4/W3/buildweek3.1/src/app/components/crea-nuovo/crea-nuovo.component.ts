import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crea-nuovo',
  templateUrl: './crea-nuovo.component.html',
  styleUrls: ['./crea-nuovo.component.scss'],
})
export class CreaNuovoComponent implements OnInit {
  sub!: Subscription;

  newPost: {
    title: string;
    body: string;
  } = {
    title: '',
    body: '',
  };
  constructor(private ps: PostsService, private router: Router) {}

  ngOnInit(): void {}

  creaNuovoPost() {
    this.sub = this.ps.createPost(this.newPost).subscribe((res) => {
      console.log('Nuovo post creato',res);
      alert('Nuovo Post creato!')
      // this.router.navigate(['/']);
      this.newPost.title = '';
      this.newPost.body = '';
    });
  }
}
