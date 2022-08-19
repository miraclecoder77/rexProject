import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportsComponent } from './reports.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SettlementsComponent } from './settlements/settlements.component';
import { BillingsComponent } from './billings/billings.component';
import { CashiersComponent } from './cashiers/cashiers.component';
import { FullBreakdownComponent } from './settlements/full-breakdown/full-breakdown.component';
import { SettlementOverviewComponent } from './settlements/settlement-overview/settlement-overview.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ReportHomeComponent,
    SalesReportComponent,
    SettlementsComponent,
    BillingsComponent,
    CashiersComponent,
    FullBreakdownComponent,
    SettlementOverviewComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
