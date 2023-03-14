import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../api.service';
import { ExcelService } from '../../../excel.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceEmployeePopupComponent } from '../../components/service-employee-popup/service-employee-popup.component';

@Component({
  selector: 'app-preview-attendance',
  templateUrl: './preview-attendance.component.html',
  styleUrls: ['./preview-attendance.component.css']
})
export class PreviewAttendanceComponent implements OnInit {


  ///grap details///
  barChartData:any=[
    {data:[100], label: 'No of User'},
    {data:[100], label: 'No of Login'},
    {data:[100], label: 'No of Logout'},
    {data:[100], label: 'No of Not Login'},
  ];
  barChartData_one:any=[
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
    {data:[0], label: ''},
  ];


  selected_branch = [];

  reportSide= [ 
    {"name": "Material Request"}, 
    ];
    dateReport= ["No of User","No of Login","No of Logout","No of Not Login"];
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      },
    };

    public barChartOptions_one:any = {
      scaleShowVerticalLines: false,
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      },
    };

    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    }
      public mbarChartLabels:string[] = ['Attendance Graph'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
      public barChartColors:Array<any> = [
      {
        backgroundColor: 'rgba(241,111,32,1)',
        borderColor: 'rgba(105,159,177,1)',
        pointBackgroundColor: 'rgba(105,159,177,1)',
        pointBorderColor: '#fafafa',
        pointHoverBackgroundColor: '#fafafa',
        pointHoverBorderColor: 'rgba(105,159,177)'
      },
      { 
        backgroundColor: 'rgba(77,20,96,0.3)',
        borderColor: 'rgba(77,20,96,1)',
        pointBackgroundColor: 'rgba(77,20,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,20,96,1)'
      }
    ];


    /////New One/////
    public mbarChartLabels_one:string[] = ['Attendance Graph'];
    public barChartType_one:string = 'bar';
    public barChartLegend_one:boolean = true;
    public barChartColors_one:Array<any> = [
    {
      backgroundColor: 'rgba(241,111,32,1)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    { 
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  
    
    final_data = [];
    count_value_total = 0;
    count_value_present  = 0;
    count_value_logout = 0;
    count_value_notlogin = 0;
    timeLeft: number = 60;
    interval;






  
  
  total_list_all = [];
  total_login = [];
  total_logout = [];
  temp_logout_person = [];
  selected_location = '';
  
  passed_date_value = new DatePipe('en-US').transform(new Date(),'yyyy-MM-dd');
  

  total_count_value_total = 0;
  total_count_value_present  = 0;
  total_count_value_logout = 0;
  total_count_value_notlogin = 0;


  value:any;
  S_Date:any;
  E_Date:any;
  excelData:any=[];
  exceldata:any=[];
  lableName=[];
  XLarray=[];
  data:any
  searchQR:any;
  searchQRbranch:any;
  rows:any=[];
  edit:any;
  branchList:any;
  access_tocken:any
  Admin_check:any
  newexcel: any = [];
  header = ["S no", "Emp Name", "Emp Code", "Emp Phone", "Location Name", "Emp type",
  "Device Number", "Status", "Login Status", "Last Login Time","Last LogoutTime","Action"];
  // rows=[{"agent_name":"arun","agent_phone":"8794561230","Email_id":"Arun@gmail.com","org_name":"Jhonshon","location_name":"chennai","mobile_model":"Nokia","mobile_make":"HMD","imei":"321546687"}]
  constructor(private router:Router, private toastr:ToastrManager,private _api: ApiService,private excelservice: ExcelService, public dialog: MatDialog) { }

  ngOnInit(): void {
    let current_date = new DatePipe('en-US').transform(new Date(),'dd/MM/yyyy');
    let select_date = new DatePipe('en-US').transform(new Date(this.passed_date_value),'dd/MM/yyyy');
    if(current_date == select_date){
      alert("For Today Report. Click The Today Button");
      let todaydates = new Date(this.passed_date_value);
      todaydates.setDate(todaydates.getDate() - 1)
      this.passed_date_value = new DatePipe('en-US').transform(new Date(todaydates),'yyyy-MM-dd');
    }
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    this.access_tocken = sessionStorage.getItem('access_tocken') ;
    
    if( this.access_tocken ==null){
      
       this.router.navigateByUrl('/service-login');
    }else{

    sessionStorage.removeItem('editemployee');
    sessionStorage.removeItem('employeeDetail');





    this._api.service_employee_list().subscribe((data:any)=>{
      this.rows = data['Data'];
      this.total_list_all = this.rows;

      let newdate = new Date(this.passed_date_value);
      let todaydate = new Date(this.passed_date_value);
       newdate.setDate(newdate.getDate() + 1)
      this.data = {
      "from_date": new DatePipe('en-US').transform(todaydate,'dd/MM/yyyy') ,
      "to_date":new DatePipe('en-US').transform(newdate,'dd/MM/yyyy')
       }


  this._api.attendence(this.data).subscribe((data:any)=>{
  this.temp_logout_person = data['Data'];
  





   this.total_list_all.forEach(element => {
    element.user_type = 'Not Login';
    element.last_login_time = '-';
    element.last_logout_time = '-';
    this.temp_logout_person.forEach(elements => {
         if(""+elements.EMPLOYEE_ID == ""+element.user_id){
          
          element.Documents = elements.LOGOUTREASON;
          element.user_type = 'Log Out';
          element.last_login_time = elements.INTIME;
          element.last_logout_time = elements.OUTTIME;
         }
      });  
  });   
  this.filter('');
  });
    });

    this.branchList = [];
    this.Admin_check = JSON.parse(sessionStorage.getItem('Sub_Admin_login') );
    var access_loc = JSON.parse(sessionStorage.getItem('access_loc') );

    
    if(this.Admin_check == null) {
     this._api.getBranchList().subscribe((response: any) => {
      this.branchList = response['Data'];
      this.branchList.forEach(element => {
        element.count_value_total = 0;
        element.count_value_present = 0;
        element.count_value_logout = 0;
        element.count_value_notlogin = 0;
        element.check_status = false;
        element.data = [];
      });
      this.branchList = this.branchList.sort((a, b) => a.branch_code > b.branch_code ? 1 : -1);
      this.selected_location = this.branchList[0].branch_code;
    });
  }
  else {
     this.branchList = access_loc;
     this.branchList.forEach(element => {
      element.count_value_total = 0;
      element.count_value_present = 0;
      element.count_value_logout = 0;
      element.count_value_notlogin = 0;
    });
  }
  }
  }


public chartHovered(e:any):void {

}
  

 public chartClicked(e:any):void {
  

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





 




  search_passed_date(){

 
   this._api.service_employee_list().subscribe((data:any)=>{
      this.rows=data['Data']
      this.exceldata=this.rows;
      this.data=this.rows;
      ;
      this.total_list_all = [];
      this.total_login = [];
      this.total_logout = [];
      let newdate = new Date(this.passed_date_value);
      let todaydate = new Date(this.passed_date_value);
       newdate.setDate(newdate.getDate() + 1)
     
      this.total_list_all = this.rows;
  this.data={
      "from_date": new DatePipe('en-US').transform(todaydate,'dd/MM/yyyy') ,
      "to_date":new DatePipe('en-US').transform(newdate,'dd/MM/yyyy')
  }
  this._api.attendence(this.data).subscribe((data:any)=>{
  this.temp_logout_person=data['Data']
   this.total_list_all.forEach(element => {
    this.temp_logout_person.forEach(elements => {
         if(""+elements.EMPLOYEE_ID == ""+element.user_id){
          
          element.last_login_time = elements.INTIME;
          element.last_logout_time = elements.OUTTIME;
          element.Documents = elements.LOGOUTREASON;
         }
      });  
  });   
  // this.timeLeft = 2;
  // this.startTimer();
  });
  });



 }





    exceldownload(){
              this.newexcel = [];
              this.value=this.final_data;
              this.value.map(d =>{
                this.newexcel.push({
                  Name :d.user_name,
                  Type :d.emp_type,
                  Branch :d.user_location,
                  Status : d.user_type,
                  Login :d.last_login_time,
                  LogOut:d.last_logout_time,
                  Reason:d.Documents
               });  
               });
            this.excelservice.exportAsExcelFile(this.newexcel, 'Att_Report_'+this.passed_date_value);
      }

      
    exceldownload2(){
          this.newexcel = [];
          this.value = this.selected_branch;
          this.value.map(d =>{
            this.newexcel.push({
              Name :d.user_name,
              Type :d.emp_type,
              Branch :d.user_location,
              Status : d.user_type,
              Login :d.last_login_time,
              LogOut:d.last_logout_time,
              Reason:d.Documents
           });  
           });
        this.excelservice.exportAsExcelFile(this.newexcel, 'Branch_Att_Report_'+this.passed_date_value);
  }


   filter(status){
    this.final_data = [];
    this.total_list_all.forEach(element => {
      if(element.user_type == 'Log In'){
        element.last_logout_time = '-';
      }
      this.final_data.push(element);
    });

    this.count_value_total = 0;
    this.count_value_present  = 0;
    this.count_value_logout = 0;
    this.count_value_notlogin = 0;


    this.searchQR = status;
  this.total_list_all.forEach(element => {
     if(element.user_type == 'Log In'){
        this.count_value_present = this.count_value_present + 1;
     }
     if(element.user_type == 'Log Out'){
      this.count_value_logout = this.count_value_logout + 1;
     }
     if(element.user_type == 'Not Login'){
      this.count_value_notlogin = this.count_value_notlogin + 1;
     }
  });
  this.count_value_total =  this.count_value_present + this.count_value_logout + this.count_value_notlogin;


  this.barChartData = [
    {data:[this.count_value_total], label: 'No of User'},
    {data:[this.count_value_present], label: 'No of Login'},
    {data:[this.count_value_logout], label: 'No of Logout'},
    {data:[this.count_value_notlogin], label: 'No of Not Login'},
  ];




  for(let a = 0 ; a < this.branchList.length ; a++){
       var value = 0;
       this.branchList[a].count_value_present = 0;
       for(let b = 0; b < this.total_list_all.length; b++){
          if(this.total_list_all[b].user_location  == this.branchList[a].branch_code && this.total_list_all[b].user_type == 'Log Out'){
            value = value + 1;
            this.branchList[a].count_value_present = this.branchList[a].count_value_present + 1;
          }
          if(this.total_list_all[b].user_location  == this.branchList[a].branch_code){
            this.branchList[a].data.push(this.total_list_all[b]);
            this.branchList[a].count_value_total = this.branchList[a].count_value_total + 1;
          }
        if(b == this.total_list_all.length - 1){
          this.barChartData_one[a].data = [value] ;
          this.barChartData_one[a].label = this.branchList[a].branch_code;
        }
       }
  }











  
   }
    

   filter_2(){
   this.selected_branch = [];
   this.total_count_value_present = 0;
   this.total_count_value_logout = 0;
   this.total_count_value_notlogin = 0;
   this.total_count_value_total = 0;

    this.branchList.forEach(elements => {
      if(elements.check_status == true){
        elements.data.forEach(element => {
        if(element.user_type == 'Log In'){
            this.total_count_value_present = this.total_count_value_present + 1;
         }
         if(element.user_type == 'Log Out'){
          this.total_count_value_logout = this.total_count_value_logout + 1;
         }
         if(element.user_type == 'Not Login'){
          this.total_count_value_notlogin = this.total_count_value_notlogin + 1;
         }
         this.total_count_value_total = this.total_count_value_total + 1;
         this.selected_branch.push(element);
        });
      }
    });
   }

   change(obj: any, check: boolean, index : any){
     if(obj.check_status == true){
      this.branchList[index].check_status = false;
     } else {
      this.branchList[index].check_status = true;
     }
   }


   today(){
    this.router.navigateByUrl('/service-admin/service-dashboard');
   }
        
}
