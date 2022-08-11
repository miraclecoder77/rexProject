import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent ,
  children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component:DashboardHomeComponent},
      { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
      { path: 'devices', loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule) },
      { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
      { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'paynow', loadChildren: () => import('./paynow/paynow.module').then(m => m.PaynowModule) },
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
