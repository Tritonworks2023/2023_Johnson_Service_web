import { Component, OnInit,Input,Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {CDK_DROP_LIST} from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-service-employee-popup',
  templateUrl: './service-employee-popup.component.html',
  styleUrls: ['./service-employee-popup.component.css']
})
export class ServiceEmployeePopupComponent implements OnInit {
  mobileno: any;
  service: any;
  service_completed: any;
  jobServices:[];
  date : any;
  showservice:boolean =false;
  constructor(public dialogRef: MatDialogRef<ServiceEmployeePopupComponent>,
    @Inject(MAT_DIALOG_DATA) data, private _api: ApiService,private toastr:ToastrManager,) {
      this.mobileno =data;
     }
  


  ngOnInit(): void {
   

    let a ={
      "user_mobile_no" : this.mobileno,
      "date" : this.date
    }
    this._api.getEmpName_view(a).subscribe(
      (response: any) => {
       
        this.service =  response.Data;   
        this.service_completed = this.service.completed_data;
       
      }
    );
  }
  audit(i)
  {
  this.jobServices=i.data;
  this.showservice=true;
  }
  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
      this.toastr.errorToastr(msg);
  }

  clear_session(){
    this.showservice=false;
  }
}
