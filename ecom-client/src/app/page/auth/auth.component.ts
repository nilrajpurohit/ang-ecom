import { Component, OnInit } from '@angular/core';
import {faUser,faKey,faCircleArrowRight,faAt,faPhone,faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }
  //ICON'S INIT
  faKey=faKey;
  faPhone=faPhone;
  faCheckCircle=faCheckCircle;
  faAt=faAt;
  faUser=faUser;
  faCircleArrowRight=faCircleArrowRight;

  // VARIABLE'S INIT
  activeForm:string='resgiter';

  ngOnInit(): void {
  }

}
