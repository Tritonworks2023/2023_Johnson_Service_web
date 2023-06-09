import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { AgmCoreModule } from '@agm/core';

import { MatStepperModule } from '@angular/material/stepper';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgOtpInputModule } from 'ng-otp-input';
import { ChartsModule } from 'ng2-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { ServiceLoginComponent } from './service-login/service-login.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { ServiceNavBarComponent } from './service-admin/components/service-nav-bar/service-nav-bar.component';
import { ServiceModule } from './service-admin/service.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxPrintElementModule } from 'ngx-print-element';
import { ServiceLocationComponent } from './service-login/service-location/service-location.component';
import { TabViewModule } from 'primeng/tabview';
import { SubAdminLoginComponent } from './sub-admin-login/sub-admin-login.component';
import { ExcelServiceComponent } from './excel-service/excel-service.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmDirectionModule } from 'agm-direction';











@NgModule({
  declarations: [
    AppComponent,
    ServiceLoginComponent,
    ServiceAdminComponent,
    ServiceLocationComponent,
    SubAdminLoginComponent,
    ExcelServiceComponent,


  ],
  imports: [
    RouterModule,
    BrowserModule,
    AutocompleteLibModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    DragDropModule,
    ServiceModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    MatButtonModule,
    NgxPrintElementModule,
    RadioButtonModule, TableModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'
      apiKey: 'AIzaSyBft9FkfTATktkCOQzazXJbMEzbblQIGtY'
    }),
    AgmDirectionModule,
    GooglePlaceModule,
    MatStepperModule,
    CalendarModule,
    MultiSelectModule,
    MatStepperModule,
    ChartsModule,
    NgOtpInputModule,
    DialogModule,
    ButtonModule,
  ],
  
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
