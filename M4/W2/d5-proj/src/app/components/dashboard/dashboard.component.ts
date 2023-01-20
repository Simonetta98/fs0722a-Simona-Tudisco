import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  popMovies: any

  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.data.getData().subscribe(
      allData => {
      this.popMovies = allData;
      console.log(this.popMovies)
      return this.popMovies;
  })
 }
 getPics(poster:string) {
  return ('https://image.tmdb.org/t/p/w500'+poster)
 }

 status: boolean = false;

clickEvent(){
    this.status = !this.status;
}
/*
likeEvent(i:number, t:string) {
  this.like.likeup(i, t).subscribe(res=>{
    console.log(res)
  })
}
*/

}
