import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';




@Component({
  selector: 'app-job-break-down',
  templateUrl: './job-break-down.component.html',
  styleUrls: ['./job-break-down.component.css']
})
export class JobBreakDownComponent implements OnInit {
  rows:any;
  searchQR;
  access_tocken:any
  Admin_check:any
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  // constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    if( this.access_tocken ==null){
       this.router.navigateByUrl('/service-login');
     
    }else{
    this._api.getbreak_down().subscribe((response: any) => {
      this.rows=response['Data'];
    })
  }
}
  refersh(){
    this._api.getbreak_down().subscribe((response: any) => {
      this.rows=response['Data'];
    })
  }

  viewpdf(data){
    this.storage.set('job_detail',data);
    this.router.navigate(['/service-admin/Breakdownservice-Pdf'])

  }
}
