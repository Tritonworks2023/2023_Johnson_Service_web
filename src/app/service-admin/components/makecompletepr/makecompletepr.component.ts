import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CurrentLoginComponent } from '../../components/current-login/current-login.component';
import { MatDialog } from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ExcelService } from '../../../excel.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-makecompletepr',
  templateUrl: './makecompletepr.component.html',
  styleUrls: ['./makecompletepr.component.css']
})
export class MakecompleteprComponent implements OnInit {
  final_data = [];
  search:any;
  searchQR : any;
  S_Date:any;
  E_Date:any;
  rows:any;



  constructor(private router:Router,private _api: ApiService, public dialog: MatDialog,private excelservice: ExcelService, private toastr:ToastrManager) { }

  ngOnInit(): void {  

  }
  refersh(){
    this.ngOnInit();
  }

  make_complete(data,index)
  {
   let a  = {
_id :  data._id,  
JOB_STATUS : 'Job Submitted',
JOB_VIEW_STATUS : 'Update By Admin',
LAST_UPDATED_TIME : ""+new Date(),
JOB_START_TIME : ""+new Date(),
JOB_END_TIME : ""+new Date(),
   }
   this._api.prtrp_mark_complete(a).subscribe((data:any)=>{
    // this.toastr.successToastr("Moved to Job Submit");
      // alert("Moved to Job Submit");
      this.rows[index].delete_status = true;
   });
  }

  make_new(data)
  {
  }

  submit(){

    this.E_Date.setDate( this.E_Date.getDate() + 1)
    let data = {
      "from_date":   new DatePipe('en-US').transform(this.S_Date,'yyyy-MM-dd') ,
      "to_date": new DatePipe('en-US').transform(this.E_Date ,'yyyy-MM-dd')
    }
    this._api.prtrp_date_wise_filter(data).subscribe((data:any)=>{
     this.rows=data['Data'];
     this.rows = this.rows.sort((a, b) => a.pm_date > b.pm_date ? 1 : -1);
    });
  }

}

