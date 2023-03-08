import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/posts.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  sub!: Subscription;
  postArr!: Post[];
  load: boolean = false;

  constructor(private ps: PostsService) {}

  ngOnInit(): void {
    this.recuperaPost();
  }

  recuperaPost() {
    this.sub = this.ps.getPosts().subscribe((ris) => {
      console.log(ris);
      this.postArr = ris;
      this.load = true;
    });
  }

  cancellaPost(id: number) {
    this.sub = this.ps.delete(id).subscribe(() => {
      this.postArr = this.postArr?.filter((post) => post.id != id);
      console.log(`post ${id} cancellato!`);
    });
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
