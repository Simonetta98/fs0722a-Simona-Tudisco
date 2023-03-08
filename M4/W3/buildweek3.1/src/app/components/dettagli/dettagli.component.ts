import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
  p!: Post;
  load: boolean = false;
  constructor(private ps: PostsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prendiPost();
  }

  prendiPost() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.ps.getPost(id).subscribe((post) => {
      this.load = true;
      return (this.p = post);
    });
  }
}
