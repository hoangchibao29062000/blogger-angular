import { Injectable,Injector } from '@angular/core';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseService {
  constructor(inject:Injector) {
    super(inject);
  }

  getTodo(param:any){
    return this.get("/public/v2/todos",param);
  }

  addTodo(body:any){
    console.log(body);
    return this.post("/public/v2/users/100/todos",body);
  }

  removeTodo(idTodo:any){
    return this.delete("/public/v2/todos/"+idTodo);
  }
}
