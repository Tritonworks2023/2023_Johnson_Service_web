import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CurrentLoginComponent } from '../../components/current-login/current-login.component';
import { MatDialog } from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ExcelService } from '../../../excel.service';

@Component({
  selector: 'app-addi-elevator-list',
  templateUrl: './addi-elevator-list.component.html',
  styleUrls: ['./addi-elevator-list.component.css']
})
export class AddiElevatorListComponent implements OnInit {
 
  rows:any;  
  data:any;
  searchQR;
  access_tocken:any
  Admin_check:any
  final_data = [];
  value:any;
  newexcel: any;
  exceldata: any;
  constructor(private router:Router,private _api: ApiService, public dialog: MatDialog,private excelservice: ExcelService) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    if( this.access_tocken ==null){
       this.router.navigateByUrl('/service-login');
    }else{
  this._api.get_additional_for_elevator().subscribe((data:any)=>{
  this.rows=data['Data']
  this.exceldata=this.rows;
    });
  }
  }
  refersh(){
    this.ngOnInit();

  }

  click(data){
    window.open('/#/elevator_view/'+data.job_id+"_"+data.survey_no, "_blank");
  }

}
