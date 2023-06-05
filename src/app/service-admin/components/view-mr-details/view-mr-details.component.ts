import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-mr-details',
  templateUrl: './view-mr-details.component.html',
  styleUrls: ['./view-mr-details.component.css']
})
export class ViewMrDetailsComponent implements OnInit {

  rows:any;

  storaged_data = {
    mr_1 : '',
    mr_2 : '',
    mr_3 : '',
    mr_4 : '',
    mr_5 : '',
    mr_6 : '',
    mr_7 : '',
    mr_8 : '',
    mr_9 : '',
    mr_10 : ''    
  };

  
  
  searchQR;

  iso_number = '';
  branch_name = '';

  job_no = '';
  customer_name = '';
  location = '';
  date = '';
  nature_of_contract = '';
  breakdown_no = '';
  tech_name = '';
  employee_no = '';
  time_reported = '';
  time_left = '';
  type_of_bd = '';
  bd_status = '';
  areas_of_bd = '';
  remarks = '';
  area_of_bd='';
  tech_signature = '';
  customer_signature = '';
  signature_date  = '';



  mr_details_oracel : any = [];

  

  types = 'audit';



  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,private route: ActivatedRoute) { }




  ngOnInit(): void {

    this.route.params.subscribe(params => {
      var param = params['id'].split("_");
   
     let job_detail = {
      SMU_SCH_JOBNO : param[0],
      SMU_SCH_COMPNO : param[1],
     };


    // let job_detail = this.storage.get('job_detail');
    let datas = {
      job_id : job_detail.SMU_SCH_JOBNO,
      key_value: job_detail.SMU_SCH_COMPNO
    }
   
    this.types = param[2];
  
    
    console.log(this.types);
    if(this.types == 'preventive'){
      this._api.preventive_data_management_comp(datas).subscribe((response: any) => {
        
        this.storaged_data = response.Data;
      });
      this._api.mr_detail_breakdown(datas).subscribe((response: any) => {  
      this.mr_details_oracel = response.Data;
      });


    } else if(this.types == 'breakdown'){
      this._api.breakdown_data_details_fetch_job_id_and_oracel(datas).subscribe((response: any) => {
        this.storaged_data = response.Data;
      });
      this._api.mr_detail_breakdown(datas).subscribe((response: any) => {
        this.mr_details_oracel = response.Data;
      });
    } else if(this.types == 'audit'){
      console.log("In");
      this._api.audit_details_fetch_job_id_and_oracel(datas).subscribe((response: any) => {
        this.storaged_data = response.Data;
        console.log(this.storaged_data);
      });

      this._api.mr_detail_audit(datas).subscribe((response: any) => {
        console.log(response);
        this.mr_details_oracel = [];        
        response.Data.datas[0].mrData.forEach(element => {
          this.mr_details_oracel.push({
            JLS_SCCM_MATLID : element.partno,
            JLS_SCCM_QTY : element.req
          })
        });
   

      });
    }
    

   



 

   

  });
    

    


  }




  printComponent(cmpName) {
     let printContents = document.getElementById(cmpName).innerHTML;
     let originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     document.title = this.breakdown_no;
     window.print();
     document.body.innerHTML = originalContents;
     window.location.reload();
}



}

