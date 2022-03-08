import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  message: string = 'abc';
  @Input('list') listAccount:Account[] = []
  constructor() {}

  ngOnInit(): void {
  }
}
