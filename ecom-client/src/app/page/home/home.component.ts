import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  public listOfImages: Array<string> = [
    "../../../../assets/images/products/braslet.jpg",
    "../../../../assets/images/products/nekcles.jpg",
    "../../../../assets/images/products/handbag.jpg",
    "../../../../assets/images/products/nekcles.jpg",
  ];

  public categories:Array<object> = [
    {
      imgSrc : "../../../../assets/images/products/glasses.jpeg",
      name: "Glasses",
      description:"Product Description"
    },
    {
      imgSrc : "../../../../assets/images/products/bracslet.jpg",
      name: "Bracslet",
      description:"Product Description"
    },
    {
      imgSrc : "../../../../assets/images/products/chain.jpg",
      name: "Chain",
      description:"Product Description"
    },
    {
      imgSrc : "../../../../assets/images/products/purse.jpeg",
      name: "Purse",
      description:"Product Description"
    },
    {
      imgSrc : "../../../../assets/images/products/glasses.jpeg",
      name: "Glasses",
      description:"Product Description"
    },
    {
      imgSrc : "../../../../assets/images/products/bracslet.jpg",
      name: "Bracslet",
      description:"Product Description"
    },
    {
      imgSrc : "../../../../assets/images/products/chain.jpg",
      name: "Chain",
      description:"Product Description"
    },
  ];

  public products:Array<object> = [
    {
      imgSrc : "../../../../assets/images/products/glasses.jpeg",
      name: "Glasses",
      description:"Product Description",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/bracslet.jpg",
      name: "Bracslet",
      description:"Product Description",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/chain.jpg",
      name: "Chain",
      description:"Product Description",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/purse.jpeg",
      name: "Purse",
      description:"Product Description",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/glasses.jpeg",
      name: "Glasses",
      description:"Product Description",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/bracslet.jpg",
      name: "Bracslet",
      description:"Product Description",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/chain.jpg",
      name: "Chain",
      description:"Product Description",
      rate : "89$"
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
