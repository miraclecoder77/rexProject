import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginTopBarComponent } from './login-top-bar/login-top-bar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    DashboardHomeComponent,
    SidebarComponent,
    LoginTopBarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
