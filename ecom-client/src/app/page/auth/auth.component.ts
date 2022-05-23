import { Component, OnInit } from '@angular/core';
import { faHandHoldingHeart,faUser,faKey,faCircleArrowRight,faAt,faPhone,faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }
  //icon init
  faKey=faKey;
  faPhone=faPhone;
  faCheckCircle=faCheckCircle;
  faAt=faAt;
  faUser=faUser;
  faCircleArrowRight=faCircleArrowRight;
  faHandHoldingHeart=faHandHoldingHeart;

  // variable init
  activeForm:string='resgiter';

  ngOnInit(): void {
  }

}
