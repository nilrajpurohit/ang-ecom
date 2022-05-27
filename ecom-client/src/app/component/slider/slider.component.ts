import { Component, OnInit,ViewChild,Input } from '@angular/core';
import {
  NgxTinySliderSettingsInterface,
  NgxTinySliderInstanceInterface,
} from "ngx-tiny-slider";
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input('type') public type:string = '';
  @Input('width') public width:string ='';
  @Input('data') public listOfData:any;
  tinySliderConfigLazy: NgxTinySliderSettingsInterface ={};
  imageLoadingProcess: BehaviorSubject<number> = new BehaviorSubject(0);
  
  @ViewChild("sliderLazy", { static: false })
  sliderLazy: NgxTinySliderInstanceInterface | any;

  constructor() { }

  ngOnInit(): void {
    if(this.type == 'banner'){
      this.tinySliderConfigLazy = {
        controls:false,
        waitForDom: true,
        controlsText: ['<', '>'],
        items: 1,
        mouseDrag: true,
        slideBy: "page",
        swipeAngle: false,
        speed: 400,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        responsive: {
          901:{
            edgePadding:200,
          },
          1000:{
            edgePadding:220,
          },
          1100:{
            edgePadding:260,
          },
          1280: {
            edgePadding:280,
          }
        },
      }
    }

    if(this.type == 'product'){
      this.tinySliderConfigLazy = {
        controls:false,
        waitForDom: true,
        controlsText: ['<', '>'],
        items:1,
        mouseDrag: true,
        slideBy: "page",
        center: true,
        swipeAngle: false,
        speed: 400,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        responsive:{
          1250:{
            items: 4,
          },
          900:{
            items: 3,
          },
          600:{
            items: 2,
          },
        }
      }
    }
   

    this.trackImageLoading();
  }

  trackImageLoading() {
    this.imageLoadingProcess
      .pipe(filter((count: number) => count === this.listOfData.length))
      .subscribe(next => {
        this.sliderLazy.domReady.next();
      });
  }

  onImgLoadSuccess() {
    const incLoadedCount = this.imageLoadingProcess.getValue() + 1;
    this.imageLoadingProcess.next(incLoadedCount);
  }
}
