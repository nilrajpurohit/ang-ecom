import { Component, OnInit } from '@angular/core';
import {faHandHoldingHeart,faCircleUser,faCartShopping} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faHandHoldingHeart=faHandHoldingHeart;
  faCircleUser=faCircleUser;
  faCartShopping=faCartShopping;
  constructor() { }

  ngOnInit(): void {
  }

}
