import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { log } from 'util';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-sub-admin-login',
  templateUrl: './sub-admin-login.component.html',
  styleUrls: ['./sub-admin-login.component.css']
})
export class SubAdminLoginComponent implements OnInit {

  email_id: string;
  passwords: string;
  phone_number: number;
  data: any;
  selectedAudio1: any;
  Pic: any;
  user_name:any;
Sub_Admin_login:boolean;


  loginDetails: any;
  userData: any;
  validation = false;

  loginError = false;
  loginErrorMsg: any;

  email: any;
  emailError = false;
  emailErrorMsg: any;

  accessloc:any=[];
  password: any;
  passwordError = false;
  passwordErrorMsg: any;


  // socialUser: SocialUser;
  isLoggedin: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,

    // private socialAuthService: SocialAuthService


  ) {

  }

  ngOnInit() {

  }
  emailValidator() {
    // let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let emailcheck = reg.test(this.email);
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.emailError = true;
      this.emailErrorMsg = 'User Name Required.'
    }  else {
      this.emailError = false;
    }
  }
  passwordValidator() {
    if (this.password === '' || this.password === undefined || this.password === null) {
      this.passwordError = true;
      this.passwordErrorMsg = 'Password Required.'
    } else {
      this.passwordError = false;
    }
  }

  emailChange(data) {
    this.email = data;
    this.emailValidator();
  }

  passwordChange(data) {
    this.password = data;
    this.passwordValidator();
  }

  validator() {
    this.emailValidator();
    this.passwordValidator();
    if (!this.emailError && !this.passwordError) {
      this.validation = true;
    } else {
      this.validation = false;
    }
  }

  logintest1() {
    this.validator();
    var data={
      "email_id":this.email,
      "password":this.password
    }
    this._api.Sub_admin_login(data).subscribe(
      (response: any) => {
       
          this.user_name=response.Data.firstname;
          sessionStorage.setItem("User Name",  JSON.stringify( this.user_name)  )    
     if (response.Status!="Failed") {
      this.accessloc=response.Data.access_location;
      sessionStorage.setItem("access_loc",  JSON.stringify(this.accessloc)
      );
      sessionStorage.setItem("Sub_Admin_login", 'true');
      sessionStorage.setItem("access_tocken",'true');
     
     this.router.navigateByUrl('/service-admin/service-dashboard');
     } else {
      alert('Invalid Account');
     }
      }
    );
    // if (this.validation) {
    //   if ((this.email == 'SUB123') && (this.password == '123456')) {
    //     sessionStorage.setItem("Sub_Admin_login", 'true');
    //     this.router.navigateByUrl('/service-admin/service-employee');
    //   } else {
    //     alert('Invalid Account');
    //   }
    // }
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }



}

