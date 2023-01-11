import { Component, OnInit } from '@angular/core';
import postsData from '../../../assets/db.json';
import { Post } from '../../post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts: Post[] = postsData;

  constructor() { }

  ngOnInit(): void {
  }

}
