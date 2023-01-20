import { Component, OnInit } from '@angular/core';
import { DataService, Favorite } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userId: number = -1;

  popMovies: any

  favorite: Favorite[]= [];

  constructor(private data: DataService, private http: HttpClient, private srv: AuthService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(
      allData => {
      this.popMovies = allData;
      console.log(this.popMovies)
      return this.popMovies;
  })
  this.getFavoritesUser();
 }
 getPics(poster:string) {
  return ('https://image.tmdb.org/t/p/w500'+poster)
 }

 status: boolean = false;

clickEvent(){
    this.status = !this.status;
}
getFavoritesUser() { //recupera l'array favoritesUser dei preferiti dell'utente e lo mette in favoritesUser
  this.srv.authObs
  .pipe(catchError(err => { console.log("error in subject user next"); throw err; }))
  .subscribe(user => {
    if (user?.user.id) {
  console.log(user)
     this.userId = user?.user.id;
     
      let id = user?.user.id;

      this.data.getFavorites().subscribe(res => {
        console.log("All favorites: ", res);
        console.log("id utente: ", id);

        this.favorite = res.filter(fav => { return fav.userId == id });
        console.log("favoritesUser: ", this.favorite);
      });
     }
    else {console.log("id non trovato nel recuperare next di user") }
  });
}

isItLiked(movieId: number):boolean { //verifica se un tale movie è tra i preferiti dell'utente

  let intersection = this.favorite.filter(fav => { return fav.movieId == movieId });
  if (intersection.length > 0) { return true; }
  return false;
 }

 likeToggle(movieId:number) {

  let isLiked:boolean = this.isItLiked(movieId);

  if (isLiked) { //il movie era tra i favorites


    let idFav = this.favorite.filter(fav => { return fav.movieId == movieId })[0].id; //id del favorite associato al movie, esiste sempre perché isItLiked ha ritornato true


    this.data.deliteFavorite(idFav).subscribe(res => {
      console.log("delete: ", res);
      this.getFavoritesUser();

    })

  }
  else { //non era tra i favorites


    this.data.postFavorite({ movieId: movieId, userId: this.userId})
      .subscribe(res => {

        console.log("posted: ", res);
        this.getFavoritesUser(); //aggiorno i favoritesUser

      }

    );
  }}
}
