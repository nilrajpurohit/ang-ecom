import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  public listOfImages: Array<object> = [
    {
      "imgSrc":"../../../../assets/images/products/braslet.jpg",
      "width":"60vw"
    },
    {
      "imgSrc":"../../../../assets/images/products/nekcles.jpg",
      width:""
    },
    {
      "imgSrc":"../../../../assets/images/products/handbag.jpg",
      "width":"60vw"
    },
    {
      "imgSrc": "../../../../assets/images/products/nekcles.jpg",
      "width":"60vw"
    }
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
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/bracslet.jpg",
      name: "Bracslet",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/chain.jpg",
      name: "Chain",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/purse.jpeg",
      name: "Purse",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/glasses.jpeg",
      name: "Glasses",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/bracslet.jpg",
      name: "Bracslet",
      rate : "89$"
    },
    {
      imgSrc : "../../../../assets/images/products/chain.jpg",
      name: "Chain",
      rate : "89$"
    },
  ];

  public newArrival:object={
    "imgSrc":"../../../../assets/images/products/handbag.jpg",
    "width":"80vw"
  }
  constructor() {}

  ngOnInit() {
  }

}
