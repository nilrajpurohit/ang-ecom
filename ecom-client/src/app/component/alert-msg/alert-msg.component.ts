import { Component, OnInit,Input } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.css']
})
export class AlertMsgComponent implements OnInit {
  @Input() data:any='';
  showAlert:boolean=false;
  faXmark=faXmark;
  constructor() { }
  ngOnInit(): void {
    if(this.data){
      this.showAlert = true;
    }
  }

  alertStyle:object={
    background:this.data.status ? 'var(--primary)' : 'var(--secondary)',
    color:this.data.status ? 'var(---secondary)' : 'var(--primary)'
  }

  toggleAlert(){
    this.showAlert = false;
  }
}
