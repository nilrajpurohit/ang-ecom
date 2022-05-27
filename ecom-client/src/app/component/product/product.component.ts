import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('data') public product:any;
  @Output() load:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  callLoad(){
    this.load.emit('load'); 
  }
}
