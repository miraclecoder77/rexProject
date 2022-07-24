import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: "full"},
  {path: "home", component: HomeComponent},
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  // anchorScrolling: 'enabled '
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
