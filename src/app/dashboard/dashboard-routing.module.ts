import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{ path: '', component: DashboardComponent ,
  children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component:DashboardHomeComponent},
      {path:"product", component: ProductsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }