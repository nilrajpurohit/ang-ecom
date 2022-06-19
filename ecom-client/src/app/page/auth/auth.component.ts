import { Component, Input, OnInit, ViewChild } from '@angular/core';
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


//Services
import { AddressService } from 'src/app/services/address.service';
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
  newUser:boolean=false;
  addressForm=false;
  login: FormGroup | any;
  registration: FormGroup | any;
  address: FormGroup | any;
  countries:any;
  states:any;
  cities:any;

  constructor(private fb:FormBuilder,private _addressService:AddressService) { }
  ngOnInit(): void {
    //Form Declaration
    this.registration = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),ForbiddenNameValidator(/password/)]],
      password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(30),Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&]).{7,}")]],
      confirmPassword :['',[Validators.required]],
    },{validator:PasswordValidator});

    this.address = this.fb.group({
      country:[{value:'',disabled:''},[Validators.required]],
      state:[{value:'',disabled:true},[Validators.required]],
      city:[{value:'',disabled:true},[Validators.required]],
      subAddress:[{value:'',disabled:true},[Validators.required]],
      pincode:[{value:'',disabled:true},[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]]
    })

    this.login = this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),ForbiddenNameValidator(/password/)]],
      password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(30),Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&]).{7,}")]],
    });

    this.getCountries();
  }

  @ViewChild(AlertMsgComponent) alertMsgCompo:AlertMsgComponent = new AlertMsgComponent;

  toggleNewUser(){
    this.addressForm = false;
    this.newUser = !this.newUser;
  }

  toggleAddressForm(){
    this.addressForm = !this.addressForm;
  }

  toggleControl(controlName:any,enable:boolean){
    switch(controlName){
      case 'state':{
        if(enable){
          this.address.get('state').enable();
        }else{
          this.address.get('state').setValue('');
          this.address.get('state').disable();
          this.address.get('city').setValue('');
          this.address.get('city').disable();
          this.address.get('pincode').setValue('');
          this.address.get('pincode').disable();
          this.address.get('subAddress').setValue('');
          this.address.get('subAddress').disable();
        }
      }
      break;
      case 'city':{
        if(enable){
          this.address.get('city').enable();
        }else{
          this.address.get('city').setValue('');
          this.address.get('city').disable();
          this.address.get('pincode').setValue('');
          this.address.get('pincode').disable();
          this.address.get('subAddress').setValue('');
          this.address.get('subAddress').disable();
        }
      }
      break;
      case 'pincode':{
        if(enable){
          this.address.get('pincode').enable();
        }else{
          this.address.get('pincode').setValue('');
          this.address.get('pincode').disable();
          this.address.get('subAddress').setValue('');
          this.address.get('subAddress').disable();
        }
      }
      break;
      case 'address':{
        if(enable){
          this.address.get('subAddress').enable();
        }else{
          this.address.get('subAddress').setValue('');
          this.address.get('subAddress').disable();
        }
      }
      break;
      default:console.log("Invalid control name in toggleControl !");
      break;
    }
  }
  
  changeControlValue(controlName:any){
    switch(controlName){
      case 'country':{
        if(this.address.get('country').value){
          var selectedCountry = JSON.parse(this.address.get('country').value);
          this.getStatesByCountryId(selectedCountry.CountryId);
        }else{
          this.toggleControl('state',false);
        }
      }
      break;
      case 'state':{
        if(this.address.get('state').value){
          var selectedState = JSON.parse(this.address.get('state').value);
          this.getCitiesByStateId(selectedState.StateId);
        }else{
          this.toggleControl('city',false);
        }
      }
      break;
      case 'city':{
        if(this.address.get('city').value){
          this.toggleControl('pincode',true);
        }else{
          this.toggleControl('pincode',false);
        }
      }
      break;
      case 'pincode':{
        if(this.address.get('pincode').value){
          this.toggleControl('address',true);
        }else{
          this.toggleControl('address',false);
        }
      }
      break;
      default:console.log("Invalid control name in changeControlValue !");
      break;
    }
  }

  // Validation Function 
  validateRegistration(){
    if(this.registration.status == 'INVALID'){
      this.alertMsgCompo.bindData({
        status:false,
        msg:'Registration form fields are invalid !',
        timeout:'3000'
      });
    }

    if(this.registration.status == 'VALID'){
      this.toggleAddressForm()
    }
  }

  validateAddress(){
    if(this.address.status == 'INVALID'){
      this.alertMsgCompo.bindData({
        status:false,
        msg:'Address form fields are invalid !',
        timeout:'3000'
      });
    }
    if(this.registration.status == 'INVALID'){
      this.alertMsgCompo.bindData({
        status:false,
        msg:'Registration form fields are invalid !',
        timeout:'3000'
      });
    }
  }

  validateLogin(){
    if(this.login.status == 'INVALID'){
      this.alertMsgCompo.bindData({
        status:false,
        msg:'Login form fields are invalid !',
        timeout:'3000'
      });
    }

    console.log(this.login);
  }

  //Service Functions
  getCountries(){
    this._addressService.getCountries().subscribe(
      data=>{this.countries = data;},
      err =>console.log("Error :"+err)
    );
  }

  getStatesByCountryId(id:any){
    this._addressService.getStatesByCountryId(id).subscribe(
      data=>{
        this.toggleControl('state',true);
        this.states = data;},
      err=>console.log("Error :"+err)
    );
  }

  getCitiesByStateId(id:any){
    this._addressService.getCitiesByStateId(id).subscribe(
      data=>{
        console.log(data);
        this.toggleControl('city',true);
        this.cities = data;},
      err=>console.log("Error :"+err)
    );
  }
}
