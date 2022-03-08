import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  account:Account = new Account;
  useForm:FormGroup | any;
  isSubmitted:boolean = false;
  @Output('register') register:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.useForm = new FormGroup({
      'fullname':new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      'birday':new FormControl(null,[]),
      'username':new FormControl(null,[]),
      'password':new FormControl(null,[]),
      'address':new FormControl(null,[])
    });
  }
  onSubmit(useForm:FormGroup){
    this.isSubmitted = true;
    if(useForm.invalid){
      alert('Không được bỏ trống');
    } else {
      alert('thành công nhe');
      console.log(useForm)
    }
  }
  doRegister(){
    let tmp = Object.assign({},this.account);
    this.register.emit(tmp);
    this.account = new Account;
  }
}
