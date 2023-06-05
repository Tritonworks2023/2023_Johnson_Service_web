import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../api.service';
import { ExcelService } from '../../excel.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceEmployeePopupComponent } from '../components/service-employee-popup/service-employee-popup.component';



@Component({
  selector: 'app-sub-admn-employee',
  templateUrl: './sub-admn-employee.component.html',
  styleUrls: ['./sub-admn-employee.component.css']
})
export class SubAdmnEmployeeComponent implements OnInit {
  final_data = [];
  value:any;
  S_Date:any;
  E_Date:any;
  excelData:any=[];
  exceldata:any=[];
  lableName=[];
  XLarray=[];
  data:any
  searchQR:any;
  rows = [];
  edit:any;
  branchList:any;
  access_tocken:any
  Admin_check:any
  newexcel: any;
  header = ["S no", "Emp Name", "Emp Code", "Emp Phone", "Location Name", "Emp type",
  "Device Number", "Status", "Login Status", "Last Login Time","Last LogoutTime","Action"];
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,private excelservice: ExcelService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    var access_loc = JSON.parse(sessionStorage.getItem('access_loc') );

    console.log(this.Admin_check);
    console.log(access_loc);
    if( this.access_tocken ==null){
       this.router.navigateByUrl('/service-login');
    }else{
    sessionStorage.removeItem('editemployee');
    sessionStorage.removeItem('employeeDetail')
    if(this.Admin_check == true){
      this.rows = [];
      this.exceldata = [];
      this.data = [];
      this._api.service_employee_list().subscribe((data:any)=>{
        console.log(data['Data']);
        var temp_data = data['Data'];
        var value_data = [];
        for(let a = 0 ; a < temp_data.length; a++){
            for(let b = 0 ;  b < access_loc.length; b++){
                if(temp_data[a].user_location == access_loc[b].branch_code){
                  value_data.push(temp_data[a]);
                } 
            }
            if(a == temp_data.length - 1){
              console.log(value_data);
              this.rows =  value_data;
            }
        }
      });
    } else {
      this._api.service_employee_list().subscribe((data:any)=>{
        this.rows = data['Data']
        this.exceldata = this.rows;
        this.data = this.rows;
      });
    }


   



  }
  }
  refersh(){
    this._api.service_employee_list().subscribe((data:any)=>{
      var temp_data = data['Data'];
    });
  }

  add(){
this.router.navigate(['/service-admin/service-agent/service-add-employee'])
  }
detail:any;
  Editcompanydetailsdata(item:any){
    sessionStorage.setItem('editemployee', JSON.stringify(true));
    this.detail=item;
    this.router.navigate(['/service-admin/service-agent/service-add-employee'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));

  }
   Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    
    this._api.employee_delete(a).subscribe(
    (response: any) => {
      
      //alert('Deleted Successfully');
      this.showSuccess("Deleted Successfully")
      this.ngOnInit();
    }
  );
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
  onFileChange(ev) {
    this.excelData = [];
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    this.lableName = ev.target.files[0].name;
    reader.onload = (event) => {
      const data = reader.result;
      // workBook = XLSX.read(data, { type: 'binary' });

      workBook = XLSX.read(data, {
        type: "binary", cellDates: true, dateNF: 'mm/dd/yyyy;@'
    });

      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      // const dataString = JSON.stringify(jsonData);
      this.excelData = jsonData["Sheet 1"];
      // this.excelData = jsonData.Sheet1;
     this.excelData.map(e=>{
      this.XLarray.push({
        "_id": "6350f32616f814705d5cc9a7",
        "user_mobile_no": e.OM_SM_MOBILE
        ,
        "user_id": e.OM_SM_EMPID
        ,
        "user_password": "12345",
        "user_per_mob": e.OM_SM_MOBILE
        ,
        "user_name": e.OM_SM_EMPNAME
        ,
        "user_email": "info@johnsonliftsltd.com",
        "user_introduced_by": "",
        "user_location": e.OM_SM_BRCODE,
        "user_mob_model": "12345",
        "user_mob_os": "Android Jelly Bean",
        "user_mob_make": "12345",
        "device_no":e.OM_SM_IMEI,
        "organisation_name": "Johnson Lifts Private Limited",
        "status": "Active",
        "mobile_issue_date": "2016-03-31T18:30:00.000Z",
        "Documents": "",
        "emp_type": "Mechanic",
        "delete_status": false,
        "last_login_time": "",
        "last_logout_time": "",
        "user_token": "",
        "user_type": "Log In",
        "__v": 0
      })
     })
    
    }
    reader.readAsBinaryString(file);
  }
   index = 0;

  // xlupload(){

  //  this.recall(this.index);

  // }
  // recall(index) {
  //   let arrayindex=this.XLarray;
    
  //        if(index < arrayindex.length) {
  //           this._api.service_employee(arrayindex[index]).subscribe((response: any) => {
  //           index = index + 1;
  //           this.recall(index);
  //         })         
  //        }
  //        else {
  //         alert("completed")
  //        }
  // }



  exceldownload(){
    this.value=this.exceldata;
     this.newexcel = this.value.map(d =>{
      this.final_data.push({
        emp_name :d.user_name,
        emp_mobile_no :d.user_mobile_no
        ,
        emp_id :d.user_id
        ,
        emp_email : d.user_email
        ,
        emp_location :d.user_location,
        emp_type :d.emp_type,
        device_no :d.device_no,
        status : d.status,
        login_status:d.user_type,
        last_login:d.last_login_time,
        last_logout:d.last_logout_time
     })   
     } );
  
    this.excelservice.exportAsExcelFile(this.final_data, 'Emp_List');
  }
  Viewdetails(item:any){
    this.detail=item;
    this.router.navigate(['/service-admin/service-add-admin'])
    sessionStorage.setItem('employeeDetail', JSON.stringify(this.detail));
  }
  employeepopup(item) {
    const dialogRef = this.dialog.open(ServiceEmployeePopupComponent, {
      width: '600px',
      data: item,
    });
    dialogRef.afterClosed().subscribe(password => {
    });
  }
}
