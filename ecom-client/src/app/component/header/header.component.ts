import { Component, OnInit } from '@angular/core';
import {faHandHoldingHeart,
  faCircleUser,
  faCartShopping,
  faPersonWalkingArrowRight,
  faArrowRightFromBracket,
  faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //ICON'S INIT
  faHandHoldingHeart=faHandHoldingHeart;
  faCircleUser=faCircleUser;
  faCartShopping=faCartShopping;
  faPersonWalkingArrowRight=faPersonWalkingArrowRight;
  faArrowRightFromBracket=faArrowRightFromBracket;
  faArrowRightToBracket=faArrowRightToBracket;
  
  constructor() { }

  ngOnInit(): void {
  }

}
