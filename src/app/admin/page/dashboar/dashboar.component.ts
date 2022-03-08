import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/servies/todo.service';

@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboar.component.html',
  styleUrls: ['./dashboar.component.css']
})
export class DashboarComponent implements OnInit {
  title: string = 'xin chào';
  birday:Date = new Date('12/2/2000');
  constructor(private todo:TodoService) { }

  ngOnInit(): void {
    console.log(this.todo.getTodo({}));
  }

}
