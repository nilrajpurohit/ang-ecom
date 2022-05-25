import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public listOfImages: Array<string> = [
    "../../../../assets/images/products/braslet.jpg",
    "../../../../assets/images/products/nekcles.jpg",
    "../../../../assets/images/products/handbag.jpg",
    "../../../../assets/images/products/nekcles.jpg",
  ];

  constructor() {}

  ngOnInit() {
  }

}
