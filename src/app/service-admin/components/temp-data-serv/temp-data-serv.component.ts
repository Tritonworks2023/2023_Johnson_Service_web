import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-temp-data-serv',
  templateUrl: './temp-data-serv.component.html',
  styleUrls: ['./temp-data-serv.component.css']
})
export class TempDataServComponent implements OnInit {

  searchQR:any;
  rows:any=[];
  rows_tmp:any=[];
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
    this.rows = [];
    this._api.get_serivce_temp_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Service Module",count : data.Data});
    });


    this._api.get_opers_temp_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Operation Module",count : data.Data});
    });


    this._api.get_error_log_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Erro Log Count",count : data.Data});
    });


    this._api.get_temp_submitted_data_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Temp Submitted data",count : data.Data});
    });


    this._api.get_temp_submitted_data_detail().subscribe((data:any)=>{
      console.log(data);
      this.rows_tmp = data.Data;
    });


    this._api.get_serivce_submitted_value_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Serive Submit Value",count : data.Data});
    });


    this._api.get_notification_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Notification Count",count : data.Data});
    });


    this._api.get_pop_notification_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Pop Notification Count",count : data.Data});
    });

    
   
  }}
  refersh(){
    this.loader_visible = true;
    this.rows = [];
    this._api.get_serivce_temp_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Service Module",count : data.Data});
    });


    this._api.get_opers_temp_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Operation Module",count : data.Data});
      
    });


    this._api.get_error_log_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Erro Log Count",count : data.Data});
      
    });


    this._api.get_temp_submitted_data_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Temp Submitted data",count : data.Data});
    });


    this._api.get_temp_submitted_data_detail().subscribe((data:any)=>{
      console.log(data);
      this.rows_tmp = data.Data;
    });

    this._api.get_serivce_submitted_value_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Serive Submit Value",count : data.Data});
    });


    this._api.get_notification_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Notification Count",count : data.Data});
    });



    this._api.get_pop_notification_count().subscribe((data:any)=>{
      console.log(data);
      this.rows.push({name : "Pop Notification Count",count : data.Data});
    });


    this.loader_visible = false;


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



  service_detele(){
  
    this.loader_visible = true
    this._api.get_serivce_temp_delete().subscribe((data:any)=>{
    console.log(data);
    this.loader_visible = false
    this.refersh();
    });
  }


  err_log_detele(){
    this.loader_visible = true
    this._api.get_error_log_count_delete().subscribe((data:any)=>{
      console.log(data);
    this.loader_visible = false
    this.refersh();
    });
  }


  operation_temp_delet(){
  
    this.loader_visible = true
    this._api.get_operation_temp_delete().subscribe((data:any)=>{
      console.log(data);
    this.loader_visible = false
    this.refersh();
    });

  }


  temp_submitte_delete(){
    this.loader_visible = true
    this._api.temp_submitte_delete().subscribe((data:any)=>{
      console.log(data);
    this.loader_visible = false
    this.refersh();
    });
  }


  get_serivce_submitted_value_delete(){
    this.loader_visible = true
    this._api.get_serivce_submitted_value_delete().subscribe((data:any)=>{
      console.log(data);
    this.loader_visible = false
    this.refersh();
    });
  }


  get_notification_delete(){
    this.loader_visible = true
    this._api.get_notification_delete().subscribe((data:any)=>{
      console.log(data);
    this.loader_visible = false
    this.refersh();
    });
  }

  get_pop_notification_delete(){
    this.loader_visible = true
    this._api.get_pop_notification_delete().subscribe((data:any)=>{
      console.log(data);
    this.loader_visible = false
    this.refersh();
    });
  }

}

