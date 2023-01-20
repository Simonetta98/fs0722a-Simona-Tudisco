import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  url = "http://localhost:3000/"
  favorites:[] = []

  constructor(private http: HttpClient) { }

  /* likeup(id: number, token: string){
    return this.http.post(this.url + "favorites", id + token)
  }
*/
}
