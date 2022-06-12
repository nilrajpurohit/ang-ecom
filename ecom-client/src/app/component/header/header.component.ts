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
  //ICON'S INIT
  faHandHoldingHeart=faHandHoldingHeart;
  faCircleUser=faCircleUser;
  faCartShopping=faCartShopping;
  faPersonWalkingArrowRight=faPersonWalkingArrowRight;
  faArrowRightFromBracket=faArrowRightFromBracket;
  faArrowRightToBracket=faArrowRightToBracket;
  faBars=faBars;
  constructor() { }

  ngOnInit(): void {
  }

  data:object = {
    status:false,
    message:'All thing is working',
    timeout:'3000s'
  }

  showMenu = false;
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
}
