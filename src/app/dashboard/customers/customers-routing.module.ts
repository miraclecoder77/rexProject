import { AllCustomersComponent } from './all-customers/all-customers.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [{ path: '', component: CustomersComponent,
                children: [
                  {path: '', redirectTo: 'all-customers', pathMatch: "Full"},
                  {path:"all-customers", component: AllCustomersComponent},
                  {path:"customer", component: CustomerComponent}
                ]}];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class CustomersRoutingModule { }
