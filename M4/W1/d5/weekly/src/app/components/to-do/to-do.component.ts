import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { TodosService } from 'src/app/service/todos.service';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {

  @ViewChild("takeInput", {static: false})
  InputVar!: ElementRef;


  listTo: List[] = [];


  constructor(private todoSrv: TodosService) {}

  ngOnInit(): void {}

  reset(){
    this.InputVar.nativeElement.value = "";
  }


  addTaskTodo(item: string) {

    setTimeout(() => {
      if (item.trim() !== '') {
        let itemTodo = this.todoSrv.addTask(item);
        console.log(itemTodo);
        this.listTo.push({
          id: this.listTo.length,
          title: itemTodo,
          completed: false,
        });
        this.reset()
      }
    }, 2000);
  }

  completeTask(id: number) {
    setTimeout(() => {
      this.listTo[id].completed = true;
      console.log(this.listTo[id])
      this.listTo = this.listTo.filter((item) => item.id !== id);
      this.todoSrv.cambiaStatoElementoLista(id);
    }, 2000);
  }


}


