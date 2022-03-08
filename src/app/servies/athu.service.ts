import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AthuService {

  constructor() { }

  checkLogin(){
    let strUser = localStorage.getItem('user')
    if(strUser){
      let user = <User>JSON.parse(strUser);
      return this.verifyLogin(user);
    }
    return false;
  }
  verifyLogin(user:User){
    if(user.user == 'admin' && user.pass == '123'){
      return true;
    } return false;
  }
  doLogin(user:User){
    if(this.verifyLogin(user)){
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }
}
