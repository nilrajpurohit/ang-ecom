import { Component, OnInit } from '@angular/core';
import {faFacebookSquare,faInstagramSquare,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebookSquare=faFacebookSquare;
  faInstagramSquare=faInstagramSquare;
  faLinkedinIn=faLinkedinIn;
  
  constructor() { }

  ngOnInit(): void {
  }

}
