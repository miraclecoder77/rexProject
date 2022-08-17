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
          {path:'sales-report', component: SalesReportComponent},
          {path: 'billings', component: BillingsComponent},
          {path:'settlements', component: SettlementsComponent},
          {path: 'cashiers', component: CashiersComponent}
        ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
