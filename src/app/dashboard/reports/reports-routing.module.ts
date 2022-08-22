import { SalesReportHomeComponent } from './sales-report/sales-report-home/sales-report-home.component';
import { SalesDetailComponent } from './sales-report/sales-detail/sales-detail.component';
import { BillingsHomeComponent } from './billings/billings-home/billings-home.component';
import { BillingReportComponent } from './billings/billing-report/billing-report.component';
import { SettlementOverviewComponent } from './settlements/settlement-overview/settlement-overview.component';
import { FullBreakdownComponent } from './settlements/full-breakdown/full-breakdown.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { CashiersComponent } from './cashiers/cashiers.component';
import { BillingsComponent } from './billings/billings.component';
import { ReportHomeComponent } from './report-home/report-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { SettlementsComponent } from './settlements/settlements.component';

const routes: Routes = [{ path: '', component: ReportsComponent, 
        children: [
          {path: '', redirectTo: 'report', pathMatch: 'FULL'},
          {path: 'report', component: ReportHomeComponent },
          {path:'sales-report', component: SalesReportComponent,
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'report' },
              { path: 'report', component: SalesReportHomeComponent },
              { path: 'detail', component: SalesDetailComponent },
            ]},
          {path: 'billings', component: BillingsComponent,
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'id' },
              { path: 'id', component: BillingsHomeComponent },
              { path: 'report', component: BillingReportComponent },
            ]},
          {path:'settlements', component: SettlementsComponent,
            children: [
              {path: "", redirectTo: "settlement", pathMatch: 'FULL'},
              { path: 'settlement', component: SettlementOverviewComponent },
              {path: 'settlement-reports', component: FullBreakdownComponent}
            ]},
          {path: 'cashiers', component: CashiersComponent}
        ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
