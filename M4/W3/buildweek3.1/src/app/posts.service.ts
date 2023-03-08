import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

export interface Post {
  title: string;
  body: string;
  image: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  //variabili observer
  clickSubj = new Subject();
  clickObs = this.clickSubj.asObservable();
  URL: string = 'https://63c517b7f80fabd877dfeb43.mockapi.io/posts';
  allPosts: Post[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    return this.http.get<Post[]>(this.URL);
  }

  getPost(id: number) {
    const url = `${this.URL}/${id}`;
    return this.http.get<Post>(url);
  }

  delete(id: number) {
    return this.http.delete(`${this.URL}` + `/${id}`);
  }

  createPost(newPost: Partial<Post>) {
    return this.http.post<Post>(this.URL, newPost);
  }

  modificaPost(id: number, newPost: Partial<Post>) {
    return this.http.put(`${this.URL}` + `/${id}`, newPost);
  }

  clicked() {
    this.clickSubj.next(null);
  }

  scegliPost(a: number) {
    this.getPosts().subscribe((ris) => {
      console.log(ris);
      this.allPosts = ris;
    });
    return this.allPosts[a - 1];
  }
}
