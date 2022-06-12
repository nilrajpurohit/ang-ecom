import { Component, OnInit } from '@angular/core';
import {faUser,faKey,faCircleArrowRight,faAt,faPhone,faCheckCircle,faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ForbiddenNameValidator,PasswordValidator } from './shared/custom.validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registration: FormGroup | any;
  address: FormGroup | any;

  constructor(private fb:FormBuilder) { }
  //ICON'S INIT
  faKey=faKey;
  faPhone=faPhone;
  faCheckCircle=faCheckCircle;
  faAt=faAt;
  faUser=faUser;
  faCircleArrowRight=faCircleArrowRight;
  faCircleArrowLeft=faCircleArrowLeft;
  
  ngOnInit(): void {

    this.registration = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),ForbiddenNameValidator(/password/)]],
      password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(30),Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&]).{7,}")]],
      confirmPassword :['',[Validators.required]],
    },{validator:PasswordValidator});
    
  }
  
  // VARIABLE'S INIT
  newUser:boolean=true;
  addressForm=false;

  toggleNewUser(){
    this.addressForm = false;
    this.newUser = !this.newUser;
  }

  toggleAddressForm(){
    console.log(this.registration);
    // this.addressForm = !this.addressForm;
  }
}
