import { Injectable } from '@angular/core';
import { PopMovies } from '../interfaces/pop-movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL = 'http://localhost:3000'


  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.URL+'/movies-popular');
    }
}
