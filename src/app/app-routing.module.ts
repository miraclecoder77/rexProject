import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: "full"},
  {path: "home", component: HomeComponent},
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
