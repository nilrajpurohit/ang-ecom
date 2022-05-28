import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input('data') public data:any;
  @Output() load:EventEmitter<string> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  callLoad(){
    this.load.emit('load'); 
  }
  
}
