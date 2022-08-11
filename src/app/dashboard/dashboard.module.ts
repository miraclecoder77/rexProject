import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginTopBarComponent } from './login-top-bar/login-top-bar.component';
import { ChartComponent } from './chart/chart.component';
import { Chart2Component } from './chart2/chart2.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    SidebarComponent,
    LoginTopBarComponent,
    ChartComponent,
    Chart2Component,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
