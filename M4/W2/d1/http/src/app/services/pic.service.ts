import { Injectable } from '@angular/core';
import { PicInterface } from '../interfaces/pic.interface';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicService {

  constructor(private http: HttpClient) { }

  likeCounter = 0
  likeSubj = new Subject<number>()

  get() {     //ricevo dati e li impacchetta secondo interfaccia   //li prendo e li mappo in una var ris
    return this.http.get<PicInterface[]>('https://jsonplaceholder.typicode.com/photos')
  }

  delete(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
}
