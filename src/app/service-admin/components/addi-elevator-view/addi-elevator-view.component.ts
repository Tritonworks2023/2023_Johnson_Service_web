import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';


// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { ApiService } from '../../../api.service';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ThemeService } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addi-elevator-view',
  templateUrl: './addi-elevator-view.component.html',
  styleUrls: ['./addi-elevator-view.component.css']
})
export class AddiElevatorViewComponent implements OnInit {

  rows: any;

  storaged_data: any;



  searchQR;
  lr_number = '';
  iso_number = '';
  branch_name = '';
  address1 = '';
  address2 = '';
  address3 = '';
  address4 = '';
  pin = '';
  job_no = '';
  customer_name = '';
  location = '';
  date = '';
  serv_type = ';'
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
  tecn_name = '';
  customer_signature = '';
  signature_date = '';
  customer_num = '';
  qo_num = '';
  cus_signature ='';



  constructor(private router: Router, private toastr: ToastrManager, private _api: ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,private route: ActivatedRoute) { }

     ngOnInit(): void {
     this.route.params.subscribe(params => {
     var param = params['id'].split("_");
  
   
    let datas = {
      job_id: param[0],
      survey_no: param[1]
    }
    //this
    this._api.get_additional_for_elevator_view(datas).subscribe((response: any) => {
      this.storaged_data = response.Data;
    })

  });
  }




  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    document.title = this.lr_number;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }



}

