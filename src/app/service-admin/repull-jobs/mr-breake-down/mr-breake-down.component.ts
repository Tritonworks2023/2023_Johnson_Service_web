import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-mr-breake-down',
  templateUrl: './mr-breake-down.component.html',
  styleUrls: ['./mr-breake-down.component.css']
})
export class MrBreakeDownComponent implements OnInit {
  rows:any;
  searchQR;
  access_tocken:any
  Admin_check:any;
  user_mobile_no:any;
  constructor(private router:Router,private _api: ApiService,    
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    
    if( this.access_tocken ==null){
      
       this.router.navigateByUrl('/service-login');
     
    }else{
  
  }
}

getRecords(){
  
  var obj={
    user_mobile_no:this.user_mobile_no
  }
  this._api.mr_bd_oracel_data(obj).subscribe((response: any) => {
    this.rows=response['Data'];
    
  })
}
  refersh(){
    var obj={
      user_mobile_no:this.user_mobile_no
    }
    this._api.mr_bd_oracel_data(obj).subscribe((response: any) => {
      this.rows=response['Data'];
      
    })
  }

}
