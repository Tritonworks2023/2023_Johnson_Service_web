import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }















    oracel_update_emp(data) {
      return this.http.post(this.apiUrl + 'service_userdetails/oracel_update_emp', data);
    }

    oracel_create_emp(data) {
      return this.http.post(this.apiUrl + 'service_userdetails/oracel_create_emp', data);
    }


    breakdown_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/breakdown_oracel_data',data);
    }
    
    preventive_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/preventive_oracel_data',data);
    }
    
    lr_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/lr_oracel_data',data);
    }
    
    pr_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/pr_oracel_data',data);
    }
    
    audit_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/audit_oracel_data',data);
    }
    
    mr_bd_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/mr_bd_oracel_data',data);
    }
    
    mr_pm_oracel_data(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/mr_pm_oracel_data',data);
    }
    


    breakdown_oracel_data_update(data){
      return this.http.post(this.apiUrl +'breakdown_data_management/breakdown_oracel_data_update',data);
    }


    audit_oracle_data_update(data){
      return this.http.post(this.apiUrl +'audit_data_management/audit_oracel_data_update',data);
    }















    

















      ///sub admin login
Sub_admin_login(data) {
  return this.http.post(this.apiUrl + 'admin_access/admin/login', data);
}
      //service employee
    
      service_employee(data){
        return this.http.post(this.apiUrl + 'service_userdetails/create', data);
      }
      service_employee_list() {
        return this.http.get(this.apiUrl + 'service_userdetails/getlist');
      }

      deactive_service_employee_list() {
        return this.http.get(this.apiUrl + 'service_userdetails/getlist/deactive');
      }
      
      subadmin_employee_list(data) {
        return this.http.post(this.apiUrl + 'service_userdetails/getlist_by_usertype',data);
      }
      Admin_list() {
        return this.http.get(this.apiUrl + 'admin_access/getlist');
      }
      employee_delete(data) {
        return this.http.post(this.apiUrl + 'service_userdetails/delete', data);
      }
    //  Admin_delete(data) {
    //     return this.http.post(this.apiUrl + 'admin_access/delete', data);
    //   }

      employee_edit(data) {
        return this.http.post(this.apiUrl + 'service_userdetails/edit', data);
      }


      clear_device_id() {
        return this.http.get(this.apiUrl + 'service_userdetails/clear_device_id');
      }

      clear_device_id_by_number(data){
        return this.http.post(this.apiUrl + 'service_userdetails/clear_device_id_user_mobile_no', data);
      }


       search_service_employee(data){
        return this.http.post(this.apiUrl + 'service_userdetails/search_service_employee', data);
      }





//attendance
agent_attendence() {
  return this.http.get(this.apiUrl + 'service_attendance/getlist');
}
attendence(data) {
  return this.http.post(this.apiUrl + 'service_attendance/admin_attendance_detail',data);
}
sub_attendence(data) {
  return this.http.post(this.apiUrl + 'service_attendance/sub_admin_attendance_detail',data);
}

//service_activity service_activity/create
service_activity(data){
  return this.http.post(this.apiUrl + 'service_activity/create', data);
}
service_activity_list() {
  return this.http.get(this.apiUrl + 'service_activity/getlist');
}
Admin_activity_list() {
  return this.http.get(this.apiUrl + 'admin_access/getlist');
}
service_activity_delete(data) {
  return this.http.post(this.apiUrl + 'service_activity/delete', data);
}

service_activity_edit(data) {
  return this.http.post(this.apiUrl + 'service_activity/edit', data);
}
// service agent 
service_employee_activity(data){
  return this.http.post(this.apiUrl + 'service_employee_activity_allocation/create', data);
}
service_employee_activity_delete(data){
  return this.http.post(this.apiUrl + 'service_employee_activity_allocation/delete', data);
}
service_employee_activity_getlist(data) {
  return this.http.post(this.apiUrl + 'service_employee_activity_allocation/fetch_allocation',data);
}
//location mappinggetlist_completed_lr
getBranchList(){
  return this.http.get(this.apiUrl +'iot_branch_code/getlist');
}
//break down 
getbreak_down(){
  return this.http.get(this.apiUrl +'breakdown_management/getlist_completed_bd');
}
getbreak_down_subadmin(data){
  return this.http.post(this.apiUrl +'breakdown_management/getlist_completed_bd_location',data);
}

getbreak_down_chart(data){
  return this.http.post(this.apiUrl +'breakdown_management/report/breakdown_detail_graph',data);
}
preventive_chart(data){
  return this.http.post(this.apiUrl +'preventive_data_management/report/preventive_detail_graph',data);
}
lr_chart(data){
  return this.http.post(this.apiUrl +'lr_service_data_management/report/lr_detail_graph',data);
}
pack_chart(data){
  return this.http.post(this.apiUrl +'part_replacement/report/part_detail_graph',data);
}


audit_down_chart(data){
  return this.http.post(this.apiUrl +'audit_data_management/report/part_detail_graph',data);
}



getbreak_down_reports(data){
  return this.http.post(this.apiUrl +'breakdown_management/report/breakdown_detail_list',data);
}
preventive_reports(data){
  return this.http.post(this.apiUrl +'preventive_data_management/report/preventive_detail_list',data);
}
lr_reports(data){
  return this.http.post(this.apiUrl +'lr_service_data_management/report/lr_detail_list',data);
}

partsack_reports(data){
  return this.http.post(this.apiUrl +'part_replacement/report/part_detail_list',data);
}


lr_dataget(){
  return this.http.get(this.apiUrl + 'lr_service_data_management/getlist_completed_lr');
}
lr_dataget_subadmin(data){
  return this.http.post(this.apiUrl + 'lr_service_data_management/getlist_completed_lr_location',data);
}
parts_rep_dataget(){
  return this.http.get(this.apiUrl + 'part_replacement/getlist_completed_prt_rep');
}
parts_rep_dataget_subadmin(data){
  return this.http.post(this.apiUrl + 'part_replacement/getlist_completed_prt_rep_location',data);
}


audit_reports(data){
  return this.http.post(this.apiUrl +'audit_data_management/report/part_detail_list',data);
}




//resubmit
getlist_bd_resubmit(){
  return this.http.get(this.apiUrl +'breakdown_data_management/getlist');
}
//getlist_completed_pm 
getlist_completed_pm(){
  return this.http.get(this.apiUrl +'breakdown_management/getlist_completed_pm');
}
getlist_completed_pm_subadmin(data){
  return this.http.post(this.apiUrl +'breakdown_management/getlist_completed_pm_location',data);
}
lr_data_details(data){
  return this.http.post(this.apiUrl + 'lr_service_data_management/fetch_job_id', data);
}
breakdown_data_details(data){
  return this.http.post(this.apiUrl + 'breakdown_data_management/fetch_job_id', data);
}


breakdown_data_details_fetch_job_id_and_oracel(data){
  return this.http.post(this.apiUrl + 'breakdown_data_management/fetch_job_id_and_oracel', data);

}



audit_details_fetch_job_id_and_oracel(data){
  return this.http.post(this.apiUrl + 'audit_data_management/fetch_job_id_and_oracel', data);
}



parts_rep_data_details(data){
  return this.http.post(this.apiUrl + 'part_replacement/fetch_job_id', data);
}

preventive_data_management(data){
  return this.http.post(this.apiUrl + 'preventive_data_management/fetch_job_id', data);
}

preventive_data_management_comp(data){
  return this.http.post(this.apiUrl + 'preventive_data_management/fetch_job_id_comp', data);
}


fetch_iso_number(data){
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_iso_number', data);
}


fetch_branch_address(data){
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_branch_address', data);
}

fetch_lr_service_detail(data){
  return this.http.post(this.apiUrl + 'lr_service_data_management/fetch_job_submit_data', data);
}

fetc_parts_rep_mat_detail(data){
  return this.http.post(this.apiUrl + 'part_replacement/service_prtrpmt_marterial_list', data);
}
fetch_sumbmitted_data_partrep(data){
  return this.http.post(this.apiUrl + 'part_replacement/fetch_sumbmitted_data', data);
}
fetch_breakdown_job_detail(data){
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_breakdown_job_detail', data);
}



//Add Admin ( Role Access To )
getEmpDetails(data) {
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/fetch_data"
  return this.http.post(this.apiUrl + 'service_sub_admin/fetch_data', data);
}
getadminDetails(data) {
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/fetch_data"
  return this.http.post(this.apiUrl + 'admin_access/fetch_data', data);
}
createservice_sub_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/create"
  return this.http.post(this.apiUrl + 'service_sub_admin/create', data);
}

updateservice_sub_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/edit"
  return this.http.post(this.apiUrl + 'service_sub_admin/edit', data);
}
update_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/edit"
  return this.http.post(this.apiUrl + 'admin_access/edit', data);
}
create_admin(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/create"
  return this.http.post(this.apiUrl + 'admin_access/create', data);
}



send_pop_up(data){
  // var link ="http://smart.johnsonliftsltd.com:3000/api/service_sub_admin/create"
  return this.http.post(this.apiUrl + 'pop_notification/create', data);
}


send_pop_up_list() {
  return this.http.get(this.apiUrl + 'pop_notification/getlist');
}


send_pop_up_delete(data) {
  return this.http.post(this.apiUrl + 'pop_notification/delete',data);
}
getEmpName_view(data) {
  return this.http.post(this.apiUrl + 'service_userdetails/fetch_view_status', data);
}
job_tracking(data){
  return this.http.post(this.apiUrl +'location_tracking_job_wise/list_tracking_job_wise', data);
}
employee_tracking(data){
  return this.http.post(this.apiUrl +'location_tracking_job_wise/list_tracking_user_wise', data);
}


////Complete Making Session//////



breakdown_date_wise_filter(data){
  return this.http.post(this.apiUrl +'breakdown_management/bd_date_wise_filter',data);
}

breakdown_mark_complete(data){
  return this.http.post(this.apiUrl +'breakdown_management/edit',data);
}

preventive_date_wise_filter(data){
  return this.http.post(this.apiUrl +'breakdown_management/pm_date_wise_filter',data);
}

prtrp_date_wise_filter(data){
  return this.http.post(this.apiUrl +'part_replacement/pr_date_wise_filter',data);
}

prtrp_mark_complete(data){
  return this.http.post(this.apiUrl +'part_replacement/edit',data);
}

audit_date_wise_filter(data){
  return this.http.post(this.apiUrl +'audit_data_management/audit_date_wise_filter',data);
}

audit_mark_complete(data){
  return this.http.post(this.apiUrl +'audit_data_management/edit',data);
}


mr_breakdown_date_wise_filter(data){
  return this.http.post(this.apiUrl +'breakdown_data_management/mr_bd_date_wise_filter',data);
}

mr_bd_mark_complete(data){
  return this.http.post(this.apiUrl +'breakdown_data_management/mr_getlist_update',data);
}


mr_preventive_date_wise_filter(data){
  return this.http.post(this.apiUrl +'breakdown_data_management/mr_pm_date_wise_filter',data);
}

mr_preventive_mark_complete(data){
  return this.http.post(this.apiUrl +'breakdown_data_management/mr_getlist_update',data);
}


mr_detail_breakdown(data){
  return this.http.post(this.apiUrl +'breakdown_data_management/mr_details_oracel',data);
}

mr_detail_audit(data){
  return this.http.post(this.apiUrl +'audit_data_management/mr_details_oracel',data);
}


/////Addition Form/////


get_additional_for_escalator() {
  return this.http.get(this.apiUrl + 'additional_forms/escalator_survey/getlist');
}

get_additional_for_escalator_view(data) {
  return this.http.post(this.apiUrl + 'additional_forms/escalator_survey/getlist_id',data);
}


get_additional_for_elevator() {
  return this.http.get(this.apiUrl + 'additional_forms/elevator_survey/getlist');
}

get_additional_for_elevator_view(data) {
  return this.http.post(this.apiUrl + 'additional_forms/elevator_survey/getlist_id',data);
}




get_van_list() {
  return this.http.get(this.apiUrl + 'van/admin_list');
}


van_details(data){
  return this.http.post(this.apiUrl + 'van/van_details', data);
}


van_details_material_mongo(data){
  return this.http.post(this.apiUrl + 'van/material_mongo', data);
}


job_count_details() {
  return this.http.get(this.apiUrl + 'auto_pull/job_count_detail');
}


///////

get_serivce_temp_count(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_serivce_temp_count');
}


get_error_log_count(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_error_log_count');
}


get_opers_temp_count(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_operation_temp_count');
}


get_serivce_submitted_value_count(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_serivce_submitted_value_count');
}



get_notification_count(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_notification_count');
}


get_pop_notification_count(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_pop_notification_count');
}





get_temp_submitted_data_count(){
  return this.http.get(this.apiUrl + 'activity/get_temp_submitted_data_count');
}


get_temp_submitted_data_detail(){
  return this.http.get(this.apiUrl + 'activity/get_temp_submitted_data_detail');
}




get_error_log_count_delete(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_error_log_count_delete');

}

get_operation_temp_delete(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_operation_temp_delete');

}


get_serivce_submitted_value_delete(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_serivce_submitted_value_delete');

}

get_serivce_temp_delete(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_serivce_temp_delete');
}


get_notification_delete(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_notification_delete');
}


get_pop_notification_delete(){
  return this.http.get(this.apiUrl + 'service_temp_data/get_pop_notification_delete');
}


temp_submitte_delete(){
  return this.http.get(this.apiUrl + 'activity/temp_submitte_delete');
}






//////////////SERVICE COUNT DETAILS//////////////////////


view_service_count(){
  return this.http.get(this.apiUrl + 'service_userdetails/view_service_count');
}

// get_temp_submitted_data_count(){
//   return this.http.get(this.apiUrl + 'activity/get_temp_submitted_data_count');
// }

// get_temp_submitted_data_count(){
//   return this.http.get(this.apiUrl + 'activity/get_temp_submitted_data_count');
// }

// get_temp_submitted_data_count(){
//   return this.http.get(this.apiUrl + 'activity/get_temp_submitted_data_count');
// }

// get_temp_submitted_data_count(){
//   return this.http.get(this.apiUrl + 'activity/get_temp_submitted_data_count');
// }





}

