import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  completati:List[]=this.todoSrv.list
  load:boolean = false

  constructor(private todoSrv:TodosService) { }

  ngOnInit(): void {
    setTimeout (() => {
      this.load = true
      console.log(this.completati)
    },2000)
  }

  rimuovi(id:number){
    setTimeout (() => {
      this.todoSrv.rimuoviElemento(id)
      //this.completati.splice(id,1)
      this.completati = this.completati.filter(item => item.id!==id)
    }, 2000);
  }

}
