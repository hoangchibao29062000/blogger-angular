import { Component, Input, OnInit } from '@angular/core';
import { HocSinh } from '../models/hocsinh.model';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }
  
  @Input('list') listHocSinh:HocSinh[] = [];

  ngOnInit(): void {
  }

}
