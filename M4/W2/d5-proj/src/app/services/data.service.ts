import { Injectable } from '@angular/core';
import { PopMovies } from '../interfaces/pop-movies';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

export interface Favorite {
  id:number,
  userId: number,
  movieId:number
 }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL = 'http://localhost:4201'


  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.URL+'/movies-popular');
    }

    getFavorites() {
      return this.http.get<Favorite[]>(this.URL+ '/favorites').pipe(catchError(err => { console.log("error in get favorites"); throw err; }));
    }
    postFavorite(fav:Partial<Favorite>) {
      return this.http.post<Favorite>(this.URL + '/favorites', fav).pipe(catchError(err => { console.log("error in post favorite"); throw err; }));
    }
  
    deliteFavorite(idFav: number) {
      return this.http.delete(this.URL+'/favorites'+`/${idFav}`).pipe(catchError(err => { console.log("error in delete favorite"); throw err; }));
    }
}
