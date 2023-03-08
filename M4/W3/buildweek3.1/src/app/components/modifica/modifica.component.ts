import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/posts.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.scss'],
})
export class ModificaComponent implements OnInit {
  sub!: Subscription;
  post: Post | undefined;
  load: boolean = false;
  constructor(
    private ps: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prendiPost();
  }

  prendiPost() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.ps.getPost(id).subscribe((post) => {
      this.load = true;
      return (this.post = post);
    });
  }

  submit() {
    if (this.post) {
      this.ps
        .modificaPost(this.post.id, this.post)
        .subscribe(() => this.router.navigate(['/']));
    }
    alert('Post modificato!')
    return console.log('Post modificato');
  }
}
