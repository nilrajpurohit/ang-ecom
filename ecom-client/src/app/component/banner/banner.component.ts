import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  // @Input('imgSrc') public src:string='';
  // @Input('size') public width:string='';
  constructor() { }
  ngOnInit(): void {
  }

}
