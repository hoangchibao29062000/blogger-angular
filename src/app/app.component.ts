import { Component } from '@angular/core';
import { HocSinh } from './models/hocsinh.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udw';
  isDisabled = true;

  listHocSinh:HocSinh[] = [
    new HocSinh("Cong Phan","Quan 12",22),
    new HocSinh("Cong Phan","Quan 12",20),
    new HocSinh("Cong Phan","Quan 12",32),
    new HocSinh("Cong Phan","Quan 12",20)
  ];

  ngOnInit(){
    console.log("init")
  }

  moKhoa(){
    alert('mở khoá')
    this.isDisabled = false;
  }

  daKhoa(){
    alert('đã khoá')
    this.isDisabled = true;
  }
}
