import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSidebarComponent } from './components/service-sidebar/service-sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts';

import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';

import {MultiSelectModule} from 'primeng/multiselect';

import {TabViewModule} from 'primeng/tabview';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgOtpInputModule } from 'ng-otp-input'
import {CheckboxModule} from 'primeng/checkbox';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceNavBarComponent } from './components/service-nav-bar/service-nav-bar.component';
import { ServiceDashboardComponent } from './service-page/service-dashboard/service-dashboard.component';
import { ServiceReportComponent } from './service-page/service-report/service-report.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ServiceReportTableComponent } from './service-page/service-report/service-report-table/service-report-table.component';
import { ServiceColumnPopupComponent } from './components/service-column-popup/service-column-popup.component';
import { JobStatusPopupComponent } from './components/job-status-popup/job-status-popup.component';
import { NgxPrintElementModule } from 'ngx-print-element';
import { ServiceAgentComponent } from './service-page/service-agent/service-agent.component';
import { ServiceAddAgentComponent } from './service-page/service-agent/service-add-agent/service-add-agent.component';
import { ServiceSideadminComponent } from './service-page/service-sideadmin/service-sideadmin.component';
import { SeviceAddadminComponent } from './service-page/service-sideadmin/sevice-addadmin/sevice-addadmin.component';
import { ServiceSettingComponent } from './service-page/service-setting/service-setting.component';
import { ServiceServiceComponent } from './service-page/service-service/service-service.component';
import { ServiceAddserviceComponent } from './service-page/service-service/service-addservice/service-addservice.component';
import { SettingCountryComponent } from './components/setting-country/setting-country.component';
import { SettingZoneComponent } from './components/setting-zone/setting-zone.component';
import { SettingStateComponent } from './components/setting-state/setting-state.component';
import { SettingCityComponent } from './components/setting-city/setting-city.component';
import { SettingAreaComponent } from './components/setting-area/setting-area.component';
import { SettingStreetComponent } from './components/setting-street/setting-street.component';
import { ReportAttendanceTableComponent } from './components/report-attendance-table/report-attendance-table.component';
import { AgentManagementComponent } from './components/agent-management/agent-management.component';
import { CurrentLoginComponent } from './components/current-login/current-login.component';
import { JobBreakDownComponent } from './components/job-break-down/job-break-down.component';
import { BreakdownservicePdfComponent } from './components/breakdownservice-pdf/breakdownservice-pdf.component';
import { PreventiveMaintenanceComponent } from './components/preventive-maintenance/preventive-maintenance.component';
import { PreventiveMaintenancePdfComponent } from './components/preventive-maintenance-pdf/preventive-maintenance-pdf.component';
import { LrServiceComponent } from './components/lr-service/lr-service.component';
import { LrServicePdfComponent } from './components/lr-service-pdf/lr-service-pdf.component';
import { PartsReplacementAckComponent } from './components/parts-replacement-ack/parts-replacement-ack.component';
import { PartsReplacementAckPdfComponent } from './components/parts-replacement-ack-pdf/parts-replacement-ack-pdf.component';
// import { LRServiceComponent } from './components/l-r-service/l-r-service.component';
import { PartsReplacementComponent } from './components/parts-replacement/parts-replacement.component';
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
import { ServiceEmployeePopupComponent } from './components/service-employee-popup/service-employee-popup.component';
import { JobTrackingComponent } from './components/job-tracking/job-tracking.component';
import { EmployeeTrackingComponent } from './components/employee-tracking/employee-tracking.component';
import { EmployeeTrackingeditComponent } from './employee-trackingedit/employee-trackingedit.component';
import { MakecompletebdComponent } from './components/makecompletebd/makecompletebd.component';
import { MakecompletepmComponent } from './components/makecompletepm/makecompletepm.component';
import { MakecompleteprComponent } from './components/makecompletepr/makecompletepr.component';
import { MakecompleteadComponent } from './components/makecompletead/makecompletead.component';
import { MakecompletemrbdComponent } from './components/makecompletemrbd/makecompletemrbd.component';
import { MakecompletemrpmComponent } from './components/makecompletemrpm/makecompletemrpm.component';
import { ViewMrDetailsComponent } from './components/view-mr-details/view-mr-details.component';
import { AddiEscalatorListComponent } from './components/addi-escalator-list/addi-escalator-list.component';
import { AddiEscalatorViewComponent } from './components/addi-escalator-view/addi-escalator-view.component';
import { AddiElevatorViewComponent } from './components/addi-elevator-view/addi-elevator-view.component';
import { AddiElevatorListComponent } from './components/addi-elevator-list/addi-elevator-list.component';
import { AgmDirectionModule } from 'agm-direction';
import { ReportAuditComponent } from './report-audit/report-audit.component';
import { PreviewAttendanceComponent } from './components/preview-attendance/preview-attendance.component';
import { ServiceagentdeactiveComponent } from './service-page/service-agent/serviceagentdeactive/serviceagentdeactive.component';
import { VanPdflistComponent } from './components/van-pdflist/van-pdflist.component';
import { VanPdfviewComponent } from './components/van-pdfview/van-pdfview.component';
import { JobsCountsComponent } from './components/jobs-counts/jobs-counts.component';
import { TempDataServComponent } from './components/temp-data-serv/temp-data-serv.component';
import { ServiceFormCountComponent } from './components/service-form-count/service-form-count.component';



@NgModule({
  declarations: [
    PartReplacementComponent,
    PreventiveComponent,
    AuditComponent,
    BreakeDownComponent,
    LrComponent,
    MrBreakeDownComponent,
    MrPreventiveComponent,
    ServiceSidebarComponent,
    ServiceNavBarComponent, 
    ServiceDashboardComponent, 
    ServiceReportComponent, 
    ServiceReportTableComponent, 
    ServiceColumnPopupComponent, 
    JobStatusPopupComponent, 
    ServiceAgentComponent, 
    ServiceAddAgentComponent, 
    ServiceSideadminComponent, 
    SeviceAddadminComponent, 
    ServiceSettingComponent, 
    ServiceServiceComponent, 
    ServiceAddserviceComponent, 
    SettingCountryComponent, 
    SettingZoneComponent, 
    SettingStateComponent, 
    SettingCityComponent, 
    SettingAreaComponent, 
    SettingStreetComponent, 
    ReportAttendanceTableComponent, 
    AgentManagementComponent, 
    CurrentLoginComponent, 
    JobBreakDownComponent, 
    BreakdownservicePdfComponent, 
    PreventiveMaintenanceComponent, 
    PreventiveMaintenancePdfComponent, 
    LrServiceComponent, 
    LrServicePdfComponent, 
    PartsReplacementAckComponent, 
    PartsReplacementAckPdfComponent,  
    PartsReplacementComponent, 
    AdminAccessComponent, 
    AddAdminUserComponent, 
    SubAdmnEmployeeComponent, 
    SubAdminBreakdownServiceComponent, 
    SubAdminPreventiveMaintenanceComponent, 
    SubAdminLRServiceComponent, 
    SubAdminPartsReplacementComponent, 
    AttendanceComponent, 
    AttendanceSubAdminComponent, 
    ReportBreakdownComponent, 
    ReportLrComponent, 
    ReporePreventiveMaintenanceComponent, 
    ReportPartsRepComponent, 
    ReportAuditComponent,
    NotificationPopSendComponent, 
    NotificationPopSendListComponent, 
    ServiceEmployeePopupComponent, 
    JobTrackingComponent, 
    EmployeeTrackingComponent, 
    EmployeeTrackingeditComponent, 
    MakecompletebdComponent, 
    MakecompletepmComponent, 
    MakecompleteprComponent, 
    MakecompleteadComponent, 
    MakecompletemrbdComponent, 
    MakecompletemrpmComponent, 
    ViewMrDetailsComponent, 
    AddiEscalatorListComponent, 
    AddiEscalatorViewComponent, 
    AddiElevatorViewComponent, 
    AddiElevatorListComponent,
    PreviewAttendanceComponent,
    ServiceagentdeactiveComponent,
    VanPdflistComponent,
    VanPdfviewComponent,
    JobsCountsComponent,
    TempDataServComponent,
    ServiceFormCountComponent
 


  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    ServiceRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    DialogModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    DragDropModule,
    InputTextModule,
    CalendarModule,
    AutocompleteLibModule,
    NgxPrintElementModule,
    AutoCompleteModule,
    Ng2SearchPipeModule,
    TableModule,
    FileUploadModule,
    TooltipModule,
    MultiSelectModule,
    TabViewModule,
    NgOtpInputModule,
    ChartsModule,
    CheckboxModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1D2WR7u1yLLsOZvJx-xv1WoNAujji4Z4'
      // apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'
    }),
    AgmDirectionModule,
    GooglePlaceModule,
    FilterPipeModule,
    ReactiveFormsModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    DatePipe
  ],
  exports: [
    ServiceSidebarComponent,
    ServiceNavBarComponent
  ]
})
export class ServiceModule { }
