import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDashboardComponent } from './service-page/service-dashboard/service-dashboard.component';
import { ServiceReportComponent } from './service-page/service-report/service-report.component';
import { ServiceReportTableComponent } from './service-page/service-report/service-report-table/service-report-table.component';
import { ServiceAgentComponent } from './service-page/service-agent/service-agent.component';
import { ServiceAddAgentComponent } from './service-page/service-agent/service-add-agent/service-add-agent.component';
import { ServiceSideadminComponent } from './service-page/service-sideadmin/service-sideadmin.component';
import { SeviceAddadminComponent } from './service-page/service-sideadmin/sevice-addadmin/sevice-addadmin.component';
import { ServiceSettingComponent } from './service-page/service-setting/service-setting.component';
import { ServiceServiceComponent } from './service-page/service-service/service-service.component';
import { ServiceAddserviceComponent } from './service-page/service-service/service-addservice/service-addservice.component';
import { AgentManagementComponent } from './components/agent-management/agent-management.component';
import { JobBreakDownComponent } from './components/job-break-down/job-break-down.component';
import { BreakdownservicePdfComponent } from './components/breakdownservice-pdf/breakdownservice-pdf.component';
import { PreventiveMaintenanceComponent } from './components/preventive-maintenance/preventive-maintenance.component';
import { PreventiveMaintenancePdfComponent } from './components/preventive-maintenance-pdf/preventive-maintenance-pdf.component';
import { LrServiceComponent } from './components/lr-service/lr-service.component';
import { LrServicePdfComponent } from './components/lr-service-pdf/lr-service-pdf.component';
import { PartsReplacementAckComponent } from './components/parts-replacement-ack/parts-replacement-ack.component';
import { PartsReplacementAckPdfComponent } from './components/parts-replacement-ack-pdf/parts-replacement-ack-pdf.component';
import { AdminAccessComponent } from './components/admin-access/admin-access.component';
import { AddAdminUserComponent } from './components/add-admin-user/add-admin-user.component';
import { SubAdmnEmployeeComponent } from './sub-admn-employee/sub-admn-employee.component';
import { SubAdminBreakdownServiceComponent } from './components/sub-admin-breakdown-service/sub-admin-breakdown-service.component';
import { SubAdminPreventiveMaintenanceComponent } from './components/sub-admin-preventive-maintenance/sub-admin-preventive-maintenance.component';
import { SubAdminLRServiceComponent } from './components/sub-admin-lr-service/sub-admin-lr-service.component';
import { SubAdminPartsReplacementComponent } from './components/sub-admin-parts-replacement/sub-admin-parts-replacement.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AttendanceSubAdminComponent } from './components/attendance-sub-admin/attendance-sub-admin.component';
import { ReportBreakdownComponent } from './report-breakdown/report-breakdown.component';
import { ReportLrComponent } from './report-lr/report-lr.component';
import { ReporePreventiveMaintenanceComponent } from './repore-preventive-maintenance/repore-preventive-maintenance.component';
import { ReportPartsRepComponent } from './report-parts-rep/report-parts-rep.component';



import { AuditComponent } from './repull-jobs/audit/audit.component';
import { BreakeDownComponent } from './repull-jobs/breake-down/breake-down.component';
import { LrComponent } from './repull-jobs/lr/lr.component';
import { MrBreakeDownComponent } from './repull-jobs/mr-breake-down/mr-breake-down.component';
import { MrPreventiveComponent } from './repull-jobs/mr-preventive/mr-preventive.component';
import { PartReplacementComponent } from './repull-jobs/part-replacement/part-replacement.component';
import { PreventiveComponent } from './repull-jobs/preventive/preventive.component';
import { NotificationPopSendComponent } from './components/notification-pop-send/notification-pop-send.component';
import { NotificationPopSendListComponent } from './components/notification-pop-send-list/notification-pop-send-list.component';
import { JobTrackingComponent } from './components/job-tracking/job-tracking.component';
import { EmployeeTrackingComponent } from './components/employee-tracking/employee-tracking.component';
import { MakecompleteadComponent } from './components/makecompletead/makecompletead.component';
import { MakecompletebdComponent } from './components/makecompletebd/makecompletebd.component';
import { MakecompletepmComponent } from './components/makecompletepm/makecompletepm.component';
import { MakecompleteprComponent } from './components/makecompletepr/makecompletepr.component';
import { MakecompletemrbdComponent } from './components/makecompletemrbd/makecompletemrbd.component';
import { MakecompletemrpmComponent } from './components/makecompletemrpm/makecompletemrpm.component';
import { ViewMrDetailsComponent } from './components/view-mr-details/view-mr-details.component';
import { AddiEscalatorListComponent } from './components/addi-escalator-list/addi-escalator-list.component';
import { AddiEscalatorViewComponent } from './components/addi-escalator-view/addi-escalator-view.component';
import { AddiElevatorListComponent } from './components/addi-elevator-list/addi-elevator-list.component';
import { AddiElevatorViewComponent } from './components/addi-elevator-view/addi-elevator-view.component';
import { ReportAuditComponent } from './report-audit/report-audit.component';
import { PreviewAttendanceComponent } from './components/preview-attendance/preview-attendance.component';
import { ServiceagentdeactiveComponent } from './service-page/service-agent/serviceagentdeactive/serviceagentdeactive.component';
import { VanPdflistComponent } from './components/van-pdflist/van-pdflist.component';
import { VanPdfviewComponent } from './components/van-pdfview/van-pdfview.component';
import { JobsCountsComponent } from './components/jobs-counts/jobs-counts.component';
import { TempDataServComponent } from './components/temp-data-serv/temp-data-serv.component';
import { ServiceFormCountComponent } from './components/service-form-count/service-form-count.component';

const routes: Routes = [
  { path: '', redirectTo: 'service-dashboard', pathMatch: 'full' },
  { path: 'service-dashboard', component: ServiceDashboardComponent },

  { path: 'Previous_date_service_dashboard', component: PreviewAttendanceComponent },


  { path: 'Attendance-sub-admin', component: AttendanceSubAdminComponent },
  { path: 'service-report', component: ServiceReportComponent },
  { path: 'Attendance-report', component: AttendanceComponent },
  { path: 'service-report-table', component: ServiceReportTableComponent },

  { path: 'service-employee', component: ServiceAgentComponent },
  { path: 'service-employee-deactive', component: ServiceagentdeactiveComponent },





  { path: 'service-agent/service-add-employee', component: ServiceAddAgentComponent },
  { path: 'service-admin', component: ServiceSideadminComponent },
  { path: 'service-add-admin', component: SeviceAddadminComponent },
  { path: 'service-setting', component: ServiceSettingComponent },
  { path: 'service-service', component: ServiceServiceComponent },
  { path: 'service-add', component: ServiceAddserviceComponent },
  { path: 'service-agent', component: AgentManagementComponent },
  { path: 'service-job_details/break_down', component: JobBreakDownComponent },
  { path: 'Breakdownservice-Pdf', component: BreakdownservicePdfComponent },
  { path: 'AdminAccess', component: AdminAccessComponent },
  { path: 'Add-AdminAccess', component: AddAdminUserComponent },
  { path: 'sub-breakdown', component: SubAdminBreakdownServiceComponent },
  { path: 'sub-preventivemaintenance', component: SubAdminPreventiveMaintenanceComponent },
  { path: 'sub-lr', component: SubAdminLRServiceComponent },
  { path: 'sub-partsrep', component: SubAdminPartsReplacementComponent },

  { path: 'preventive-maintenance', component: PreventiveMaintenanceComponent },
  { path: 'preventive-maintenance-Pdf', component: PreventiveMaintenancePdfComponent },

  { path: 'lr-service', component: LrServiceComponent },
  { path: 'lr-service-Pdf/:id', component: LrServicePdfComponent},

  { path: 'parts-ack', component: PartsReplacementAckComponent },
  { path: 'parts-ack-pdf', component: PartsReplacementAckPdfComponent },
  { path: 'sub-admin-employee', component: SubAdmnEmployeeComponent },
  { path: 'ReportBreakdownComponent', component: ReportBreakdownComponent },
  { path: 'ReportLrComponent', component: ReportLrComponent },
  { path: 'ReporePreventiveMaintenanceComponent', component: ReporePreventiveMaintenanceComponent },
  { path: 'ReportPartsRepComponent', component: ReportPartsRepComponent },
  { path: 'ReportAudit', component: ReportAuditComponent },

   //tracking
   { path: 'Job-tracking', component: JobTrackingComponent },
   { path: 'employee-tracking', component: EmployeeTrackingComponent },
  

    //Repull-jobs
    { path: 'Audit', component: AuditComponent },
    { path: 'BreakeDown', component: BreakeDownComponent },
    { path: 'Lr', component: LrComponent },
    { path: 'MrBreakeDown', component: MrBreakeDownComponent },
    { path: 'MrPreventive', component: MrPreventiveComponent },
    { path: 'PartReplacement', component: PartReplacementComponent },
    { path: 'Preventive', component: PreventiveComponent },
    
    { path: 'service_notification', component: NotificationPopSendComponent },
    { path: 'service_notification_list', component: NotificationPopSendListComponent },


        //Make Complete - Jobs
        { path: 'makecompletead', component: MakecompleteadComponent },
        { path: 'makecompletebd', component: MakecompletebdComponent },
        { path: 'makecompletepm', component: MakecompletepmComponent },
        { path: 'makecompletepr', component: MakecompleteprComponent },

        { path: 'makecompletemrbd', component: MakecompletemrbdComponent },
        { path: 'makecompletemrpm', component: MakecompletemrpmComponent },


        { path: 'escalator_list', component: AddiEscalatorListComponent },
        { path: 'elevator_list', component: AddiElevatorListComponent },
     

        { path: 'van_list', component: VanPdflistComponent },
        { path: 'jobs_count', component: JobsCountsComponent },
        { path: 'temp_data_count', component:  TempDataServComponent},
        { path: 'service_form_data_count', component:  ServiceFormCountComponent},
        // 
        

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
