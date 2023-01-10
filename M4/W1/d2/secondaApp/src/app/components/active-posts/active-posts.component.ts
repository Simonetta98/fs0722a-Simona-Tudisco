import { Component, OnInit } from '@angular/core';
import postsData from '../../../assets/db.json';
import { Post } from '../../post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  posts: Post[] = postsData;

  constructor() { }

  ngOnInit(): void {
  }

}
