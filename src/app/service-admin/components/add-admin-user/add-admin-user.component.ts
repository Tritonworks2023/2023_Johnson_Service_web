import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-add-admin-user',
  templateUrl: './add-admin-user.component.html',
  styleUrls: ['./add-admin-user.component.css']
})
export class AddAdminUserComponent implements OnInit {
  branchList:any;
  adminForm: FormGroup;
  searchQR: any;
  searchQR1: any;
  user = [
    { "name": "HO", },
    { "name": "BRANCH", },
  ];
  setAccess = [
    { "access": "Service Management", "status": true, check: false },
    { "access": "Report Management", "status": true, check: false },
  ];
  setagent = [{ "access": "Admin ", "status": true, },
  { "access": "New Agent ", "status": true, },
  { "access": "Agent ", "status": true, },
  { "access": "New Service ", "status": true, },
  { "access": "Service ", "status": true, },
  { "access": "Report ", "status": true, },
  { "access": "Agent  Report", "status": true, },
  { "access": "Document ", "status": true, },
  { "access": "Settings ", "status": true, },
  { "access": "Location ", "status": true, },
  { "access": "Data ", "status": true, },
  { "access": "Dashboard", "status": true, },]
  editEmp: any;
  empList: any = [];
  serviceList: any;
  Report: boolean = false;
  Service: boolean = false;
  access_location: any = [];
  service_detail: any = [];
  editTrue: boolean = false;
  filterEmpValue: any;
  filterServiceValue: any;
  employeeChecked: boolean =false;
  serviceChecked: boolean =false;


  constructor(private router: Router, private formBuilder: FormBuilder, private toastr: ToastrManager,
    private _api: ApiService,) {
    this.adminForm = this.formBuilder.group({
      _id: [''],
      firstname: ['', Validators.required,],
      // lastname: ['', Validators.required,],
      email_id: ['', Validators.required,],
      mobile_no: ['', Validators.required,],
      user_name: ['', Validators.required,],
      password: ['', Validators.required,],
      confirm_password: ['', Validators.required,],
      status: ['Admin',],

    })
  }

  async ngOnInit(): Promise<void> {
    this._api.getBranchList().subscribe((response: any) => {
      this.branchList = response['Data'];
      console.log(this.branchList);
    });

    
    this.editEmp = JSON.parse(sessionStorage.getItem('employeeDetail') || '{}');


    await this._api.getadminDetails({ mobile_no: this.editEmp.mobile_no
    }).subscribe(
      (response: any) => {
         
          console.log(response);

        if (response.Message == "No Details Found") {
          this.editTrue = false;
        } else {
          this.editTrue = true;
          
          this.branchList.forEach(ele => {
           response.Data.access_location.forEach(ele2 => {
              if (""+ele._id == ""+ele2._id) {                
                ele.check = true;
              }
            });
          });


          console.log(this.branchList);

         
          this.adminForm.patchValue({
            _id: response.Data._id
            ,
          })
           
          
          this.access_location = response.Data.access_location
          // this.service_detail = response.Data.access_live
        }
      }
    );

    this.adminForm.patchValue({
      firstname: this.editEmp.user_name,
      // lastname:this.editEmp.lastname, 
      email_id: this.editEmp.email_id,
      mobile_no: this.editEmp.mobile_no
      ,
      user_name: this.editEmp.user_name,
      password: this.editEmp.password
      ,
      confirm_password: this.editEmp.confirm_password
      ,
      // status:this.editEmp.status 
    })
  }


  cancel() {
    this.router.navigate(['/service-admin/AdminAccess'])
  }

  async getEmp() {
  
  }
  

  async getService() {
   await this._api.Admin_list().subscribe(async (response: any) => {
      this.serviceList = response['Data'];
      this.filterServiceValue = this.serviceList;


     await this.service_detail && this.service_detail.forEach(ele => {
        this.serviceList && this.serviceList.forEach(ele2 => {
          if (ele._id == ele2._id) {
            ele2.check = true;
          }
        });
      });
    })
  }

  checkValue(event: any, item) {
    if (item.access == "Service Management" && event.currentTarget.checked) {
      this.Service = true;
    } else if (item.access == "Report Management" && event.currentTarget.checked) {
      this.Report = true;
    }

    if (item.access == "Service Management" && !event.currentTarget.checked) {
      this.Service = false;
    } else if (item.access == "Report Management" && !event.currentTarget.checked) {
      this.Report = false;
    }

  }


  checkEmployeeValue(event: any, item) {
    if (event.currentTarget.checked) {
      item.check = true;
      this.access_location.push(item);
    } else {
      item.check = false;
      this.access_location = this.access_location.filter((ele) => ele._id !== item._id);
    }

    if((this.empList && this.empList.length) == (this.access_location && this.access_location.length)){
      this.employeeChecked = true;
    }else{
      this.employeeChecked = false;
    }

  }


  checkAllEmployee(event: any) {
    if (event.currentTarget.checked) {
      this.empList.forEach(element => {
        element.check = true;
      });
      this.access_location = this.empList;
    } else {
      this.empList.forEach(element => {
        element.check = false;
      });
      this.access_location = [];
    }

    
  }


  checkAllService(event: any) {
    if (event.currentTarget.checked) {
      this.serviceList.forEach(element => {
        element.check = true;
      });
      this.service_detail = this.serviceList;
    } else {
      this.serviceList.forEach(element => {
        element.check = false;
      });
      this.service_detail = [];
    }
  }


  checkServiceValue(event: any, item) {
   
    if (event.currentTarget.checked) {
      item.check = true;
      var obj = {
        "check": true,
        "menu_name": item.service_name,
        "_id": item._id
      }
      this.service_detail.push(obj);
    } else {
      this.service_detail = this.service_detail.filter((ele) => ele._id !== item._id);
    }
    if((this.serviceList && this.serviceList.length) == (this.service_detail && this.service_detail.length)){
      this.serviceChecked = true;
    }else{
      this.serviceChecked = false;
    }
  }

  save() {
  
    

    var enteredData = this.adminForm.value;
    enteredData.status = enteredData.status.name
    enteredData.access_live = this.service_detail,
      enteredData.access_location = this.access_location

      console.log(enteredData);

    if (this.editTrue) {
      this._api.update_admin(enteredData).subscribe((data: any) => {
        if (data.Message != "Functiondetails Updated") {
          this.toastr.successToastr(data.Message);
        } else {
          this.toastr.successToastr("Updated Successfully");
          // this.router.navigate(['/service-admin/AdminAccess'])
        }
        // this.ngOnInit();
      });
    } else {
      this._api.create_admin(enteredData).subscribe((data: any) => {
        if (data.Message != "Added successfully") {
          this.toastr.successToastr(data.Message);
        } else {
          this.toastr.successToastr("Created Successfully");
          // this.router.navigate(['/service-admin/AdminAccess'])
        }
        // this.ngOnInit();
      });
    }
    // this.toastr.errorToastr(msg);
  }


  filterByText(initial: string) {
   
    this.empList = this.filterEmpValue;
    this.empList = this.empList.filter((i: any) => i.user_name.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
  }

  filterByService(initial: string) {
 
    this.serviceList = this.filterServiceValue;
    this.serviceList = this.serviceList.filter((i: any) => i.service_name.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
  }
}
