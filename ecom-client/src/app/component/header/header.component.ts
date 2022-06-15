import { Component, OnInit } from '@angular/core';
import {faHandHoldingHeart,
  faCircleUser,
  faCartShopping,
  faPersonWalkingArrowRight,
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  //ICON'S INIT
  faHandHoldingHeart=faHandHoldingHeart;
  faCircleUser=faCircleUser;
  faCartShopping=faCartShopping;
  faPersonWalkingArrowRight=faPersonWalkingArrowRight;
  faArrowRightFromBracket=faArrowRightFromBracket;
  faArrowRightToBracket=faArrowRightToBracket;
  faBars=faBars;

  //Variables
  showMenu = false;
  
  //Functions
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
}
