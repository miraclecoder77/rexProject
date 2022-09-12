import { ModalComponent } from '../../modal/modal.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SkeletonModule } from './../../shared/skeleton/skeleton.module';
import { UtilityModule } from '@ga/utility';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerComponent,
    AllCustomersComponent,
    ModalComponent

  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    UtilityModule,
    // DynamicTableModule,
    // SkeletonModule,
  ]
})
export class CustomersModule { }
