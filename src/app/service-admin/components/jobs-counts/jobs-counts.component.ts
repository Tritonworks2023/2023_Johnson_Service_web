import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-jobs-counts',
  templateUrl: './jobs-counts.component.html',
  styleUrls: ['./jobs-counts.component.css']
})
export class JobsCountsComponent implements OnInit {

  searchQR:any;
  rows:any=[];
  edit:any;
  access_tocken:any
  Admin_check:any
  branchList:any;
  detail:any;
  loader_visible  = false;

  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    if( this.access_tocken ==null){
       this.router.navigateByUrl('/service-login');
     
    }else{
    sessionStorage.removeItem('editemployee');
    sessionStorage.removeItem('employeeDetail')
    // this._api.service_employee_list().subscribe((data:any)=>{
    //   this.rows=data['Data']
    // });
    this._api.job_count_details().subscribe((data:any)=>{
      this.rows=data['Data'];
      console.log(this.rows);
    });
   
  }}
  refersh(){
    this.loader_visible = true;
    this._api.job_count_details().subscribe((data:any)=>{
      this.rows=data['Data'];
      this.loader_visible = false;
    });
  }


  Editcompanydetailsdata(item:any){
    sessionStorage.setItem('editemployee', JSON.stringify(true));
    this.detail=item;
    this.router.navigate(['/service-admin/Add-AdminAccess'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));

  }

  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
      this.toastr.errorToastr(msg);
  }

  showWarning(msg) {
      this.toastr.warningToastr(msg);
  }

  Viewdetails1(){
    // this.detail=item;
    this.router.navigate(['/service-admin/Add-AdminAccess'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));
  }


  push_fast(){
    this.loader_visible = true
    this._api.job_count_details().subscribe((data:any)=>{
    let datas = data['Data'];
    this.loader_visible = false
    });
  }


}
