import { Component, OnInit,Input } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.css']
})
export class AlertMsgComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  
  }

  //Variables
  alertData:any='';
  showAlert:boolean=true;
  faXmark=faXmark;
  
  
  //Functions
  bindData(data:any){
    this.showAlert = true;
    this.alertData = data;
    if(this.alertData.timeout){
      setTimeout(()=>{
        this.showAlert = false;
        this.alertData = '';
      },this.alertData.timeout)
    }
  }

  alertStyle:object={
    background:this.alertData.status ? 'var(--primary)' : 'var(--secondary)',
    color:this.alertData.status ? 'var(--secondary)' : 'var(--primary)',
    border:this.alertData.status ? '2px solid var(--secondary)' : '2px solid var(--primary)',
  }

  toggleAlert(){
    this.showAlert=false;
    this.alertData='';
  }

}
