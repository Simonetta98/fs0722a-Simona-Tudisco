import { Component } from '@angular/core';
import { PicInterface } from './interfaces/pic.interface';
import { PicService } from './services/pic.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http';


  pics: PicInterface[] = [];

  sub!: Subscription;


  constructor(private picSrv: PicService) {}

  ngOnInit(): void {
    this.recuperaPics();
  }

  recuperaPics() {
    this.sub = this.picSrv.get().subscribe((ris)=> {
        console.log(ris);
        //console.log(ris.map(({ title }) => title))
        this.pics = ris
        console.log(this.pics)
    });
  }

  @Output() eliminaPics:EventEmitter<number> = new EventEmitter()
  eliminaPics() {
    this.picSrv.delete(this.pics)
    console.log(`pic numero ${id} eliminata!`)
  }

}
