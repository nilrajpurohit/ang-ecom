import { Component, OnInit, ViewChild } from '@angular/core';
import { faEarthAsia,
          faCity,
          faLocationDot,
          faMapPin,
          faCircleArrowLeft,
          faCircleArrowRight,
          faUser,faKey,faAt,
          faPhone,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ForbiddenNameValidator,PasswordValidator } from './shared/custom.validator';
import { AlertMsgComponent } from 'src/app/component/alert-msg/alert-msg.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  //ICON'S INIT
  faEarthAsia=faEarthAsia;
  faCity=faCity;
  faLocationDot=faLocationDot;
  faMapPin=faMapPin;
  faCircleArrowLeft=faCircleArrowLeft;
  faCircleArrowRight=faCircleArrowRight;
  faUser=faUser;
  faKey=faKey;
  faAt=faAt;
  faPhone=faPhone;
  faCheckCircle=faCheckCircle;
  
  // VARIABLE'S INIT
  newUser:boolean=true;
  addressForm=true;
  registration: FormGroup | any;
  address: FormGroup | any;

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.registration = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),ForbiddenNameValidator(/password/)]],
      password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(30),Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&]).{7,}")]],
      confirmPassword :['',[Validators.required]],
    },{validator:PasswordValidator});

    this.address = this.fb.group({
      country:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      subAddress:['',[Validators.required]],
      pincode:['',[Validators.required]]
    })
  }

  @ViewChild(AlertMsgComponent) alertMsgCompo:AlertMsgComponent = new AlertMsgComponent;

  toggleNewUser(){
    this.addressForm = false;
    this.newUser = !this.newUser;
  }

  toggleAddressForm(){
    this.addressForm = !this.addressForm;
  }

  validateRegistration(){
    if(this.registration.status == 'INVALID'){
      this.alertMsgCompo.bindData({
        status:false,
        msg:'Form fields are invalid !',
        timeout:'3000'
      });
    }

    if(this.registration.status == 'VALID'){
      this.toggleAddressForm()
    }
  }

  validateAddress(){
    console.log(this.address);
    // if(this.address.status == 'INVALID'){
    //   this.alertMsgCompo.bindData({
    //     status:false,
    //     msg:'Form fields are invalid !',
    //     timeout:'3000'
    //   });
    // }
  }

}
