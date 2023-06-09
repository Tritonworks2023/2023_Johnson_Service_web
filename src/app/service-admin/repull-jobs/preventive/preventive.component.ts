import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.css']
})
export class PreventiveComponent implements OnInit {

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
  this._api.preventive_oracel_data(obj).subscribe((response: any) => {
    this.rows=response['Data'];
    this.rows = this.rows.sort((a, b) => a.SMU_SCH_COMPDT > b.SMU_SCH_COMPDT ? 1 : -1);
    
    this.rows.forEach(element => {
      element.SMU_SCH_COMPDT = new Date(element.SMU_SCH_COMPDT);
    });



  })
}
  refersh(){
    var obj={
      user_mobile_no:this.user_mobile_no
    }
    this._api.preventive_oracel_data(obj).subscribe((response: any) => {
      this.rows=response['Data'];
      this.rows = this.rows.sort((a, b) => a.SMU_SCH_COMPDT > b.SMU_SCH_COMPDT ? 1 : -1);

      this.rows.forEach(element => {
        element.SMU_SCH_COMPDT = new Date(element.SMU_SCH_COMPDT);
      });
      
    })
  }

  make_no(data){
  console.log(data.SMU_SCH_COMPNO);

  var obj={
    SMU_SCH_COMPNO:data.SMU_SCH_COMPNO
  }
  this._api.breakdown_oracel_data_update(obj).subscribe((response: any) => {
    this.rows=response['Data'];
    
    this.refersh();
  })
  }

}
