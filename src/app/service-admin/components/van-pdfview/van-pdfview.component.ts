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
  selector: 'app-van-pdfview',
  templateUrl: './van-pdfview.component.html',
  styleUrls: ['./van-pdfview.component.css']
})
export class VanPdfviewComponent implements OnInit {
  mat_data:any;
  rows:any;

  storaged_data : any;

  first_text = 'L';
  
  searchQR;
  comp_number = '';
  mr_number = '';
  ref_number = '';
  branch_name = '';
address1 ='';
address2 ='';
address3 ='';
address4 ='';
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
  tech_signature = '';
  customer_signature = '';
  mec_sign = '';
  signature_date  = '';
  pin = '';
  serv_type = '';
  mat_id = '';
  mat_quan = '';
  mat_seq_no = '';

 






  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,private route: ActivatedRoute) { }




  ngOnInit(): void {



    this.route.params.subscribe(params => {
      var param = params['id'].split("_");
     let job_detail = {
      SMU_JOBNO : param[0],
      SMU_MRSEQNO : param[1],
     };
    let datas = {
      job_id : job_detail.SMU_JOBNO,
      key_value: job_detail.SMU_MRSEQNO
    }
    let datas1 = {
      key_value: job_detail.SMU_MRSEQNO
    }
    // form format
    this._api.van_details(datas).subscribe((response: any) => {
      this.storaged_data = response.Data;
      console.log("*******",this.storaged_data);

      this.customer_name = this.storaged_data[0].SMU_CUSTNAME;
      this.tech_name = this.storaged_data[0].SMU_TECHNAME;
      this.job_no = this.storaged_data[0].SMU_JOBNO;
      this.address1 = this.storaged_data[0].SMU_ADDRESS1;
      this.address2 = this.storaged_data[0].SMU_ADDRESS2;
      this.address3 = this.storaged_data[0].SMU_ADDRESS3;
      this.address4 = this.storaged_data[0].SMU_ADDRESS4;
      this.pin = this.storaged_data[0].SMU_CUSTPIN;
      this.date = this.storaged_data[0].SMU_MRDT;
      this.ref_number = this.storaged_data[0].SMU_TECHMOBNO;
      // this.time_reported = this.storaged_data[0].SMU_CUSTNAME;



    })

    // let a = {
    //   ISO_DRH_MODULE : 'BREAKDOWN',
    //   ISO_DRH_LETYPE : 'L'
    // }
    // this._api.fetch_iso_number(a).subscribe((response: any) => {
    //   this.iso_number = response.Data[0].ISO_DRH_DOCNO;
    // })



    this._api.fetch_branch_address(datas).subscribe((response: any) => {
      this.branch_name = response.Data[0].BRANCNAME;
    })

// form sub

    this.mat_data = [];
    this._api.van_details_material_mongo(datas1).subscribe((response: any) => {
       console.log(response.Data);
       if(response.Data.length !== 0){
       this.mec_sign = response.Data[0].signature;
       this.signature_date = response.Data[0].submitted_on;
       response.Data[0].mat_list.forEach(element => {
        this.mat_data.push({
          mat_id : element.SVS_MATLID,
          qty : element.qty,
          type : 'M'
        })
       });
       response.Data[0].qr_bar_code.forEach(element => {
        this.mat_data.push({
          mat_id : element.ST_GRID_MATLID,
          qty : 1,
          type : 'B'
        })
       });
      } else {
          alert("No Record Found,GO Back");
          this.router.navigateByUrl('/service-admin/van_list');
      }
    })


    // this._api.fetch_sumbmitted_data_partrep(datas).subscribe((response: any) => {
    //   // this.customer_signature = response.Data.customerAcknowledgement;
    //   // this.mec_sign = response.Data.techSignature;
  
    // })


  });
  }




  printComponent(cmpName) {
     let printContents = document.getElementById(cmpName).innerHTML;
     let originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     document.title = this.mr_number;
     window.print();
     document.body.innerHTML = originalContents;
     window.location.reload();
}



}
