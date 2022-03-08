import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/servies/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  data:Todo[]|any = [];
  todoModel:Todo = new Todo;
  isEdit:boolean = false;

  constructor(private todo:TodoService) { }

  ngOnInit(): void {
    this.doLoad();
  }

  addNewTodo(){
    let tmp = Object.assign({}, this.todoModel);
    this.todo.addTodo(tmp);
    this.todoModel = new Todo;
  }
  
  updateTodo(){
    this.todoModel = new Todo;
    this.isEdit = false;
    this.doSave();
  }
  doRemoveTodo(item:any){
    console.log(item);
    this.todo.removeTodo(item.id)
  }
  doneTodo(item:Todo){
    item.status = 'complete';
    this.doSave();
  }

  checkDeadline(item: Todo){
    let todoDate = new Date(item.due_on);
    let today = new Date;
    if(todoDate < today && item.status == 'complete')
    {
      return true;
    }
    return false;
  }

  removeTodo(index:number, item:Todo)
  {
    if(confirm(`Bạn có chắc sẽ xóa ghi chú ${item.status} ?`)){
      this.data.splice(index,1);
      this.doSave();
    }
  }

  openUpdateTodo(item:Todo){
    this.todoModel = item;
    this.isEdit = true;
  }

  doSave(){
    localStorage.setItem('todo',JSON.stringify(this.data));
  }

  doLoad(){
    this.todo.getTodo({}).then((res) => {
      this.data = res;
    }).catch((error) => {
      console.error(error);
    })
  }
}
