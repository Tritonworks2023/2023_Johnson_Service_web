import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceLoginComponent } from './service-login/service-login.component';
import { SubAdminLoginComponent } from './sub-admin-login/sub-admin-login.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { LrServicePdfComponent } from './service-admin/components/lr-service-pdf/lr-service-pdf.component';
import { PartsReplacementAckPdfComponent } from './service-admin/components/parts-replacement-ack-pdf/parts-replacement-ack-pdf.component';
import { BreakdownservicePdfComponent } from './service-admin/components/breakdownservice-pdf/breakdownservice-pdf.component';
import { PreventiveMaintenancePdfComponent } from './service-admin/components/preventive-maintenance-pdf/preventive-maintenance-pdf.component';
import { ViewMrDetailsComponent } from './service-admin/components/view-mr-details/view-mr-details.component';
import { AddiEscalatorViewComponent } from './service-admin/components/addi-escalator-view/addi-escalator-view.component';
import { AddiElevatorViewComponent } from './service-admin/components/addi-elevator-view/addi-elevator-view.component';
import { VanPdfviewComponent } from './service-admin/components/van-pdfview/van-pdfview.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login', },
{ path: '', pathMatch: 'full', redirectTo: 'service-login', },
  { path: 'service-login', component: ServiceLoginComponent, },
  { path: 'sub-admin-login', component: SubAdminLoginComponent, },

  { path: 'one_page_lrservice_pdf/:id', component: LrServicePdfComponent },
  { path: 'one_page_prtrpservice_pdf/:id', component: PartsReplacementAckPdfComponent },
  { path: 'one_page_bdservice_pdf/:id', component: BreakdownservicePdfComponent },
  { path: 'one_page_pmservice_pdf/:id', component: PreventiveMaintenancePdfComponent },
  ///view MR Details/////
  { path: 'mr_view_details/:id', component: ViewMrDetailsComponent },


  { path: 'escalator_view/:id', component: AddiEscalatorViewComponent },
  { path: 'elevator_view/:id', component: AddiElevatorViewComponent },

  { path: 'van_pdf_view/:id', component: VanPdfviewComponent },


  // { path: 'preventive-maintenance-Pdf', component: PreventiveMaintenancePdfComponent },
  // { path: 'Breakdownservice-Pdf', component: BreakdownservicePdfComponent },




  { path: 'sub-admin-login', component: SubAdminLoginComponent, },



  {
    path: 'service-admin', component: ServiceAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`./service-admin/service.module`).then(m => m.ServiceModule)
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
