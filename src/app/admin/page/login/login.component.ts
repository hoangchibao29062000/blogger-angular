import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

import { NgForm } from '@angular/forms';
import { AthuService } from 'src/app/servies/athu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(private router:Router, private authService:AthuService) {}

  ngOnInit(): void {
  }
  onSubmit (frm:NgForm){
    if(frm.valid){
      console.log(this.user+'1');
      if(this.authService.doLogin(this.user)){
        console.log(this.user);
        this.router.navigateByUrl('/admin');
      }else {
        alert('đăng nhập thất bại r đó bro nhập đúng đi làm ơn.')
      }
    } 
  }
}
