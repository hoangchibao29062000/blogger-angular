import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { ListComponent } from './childs/list/list.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listAccount:Account[] = [];

  @ViewChild('listChild') listChild:ListComponent | undefined;
  constructor() { }

  ngOnInit(): void {
    this.listAccount = [
      new Account('user1','user1','Chi bao'),
      new Account('user2','user2','Chi bao'),
      new Account('user3','user3','Chi bao'),
      new Account('user4','user4','Chi bao'),
    ]
  }

  ngAfterViewInit() {
    alert(this.listChild?.message)
  }
  onRegister(Account:Account) {
    this.listAccount.push(Account);
  }
}
