import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from './../../shared/skeleton/skeleton.module';
import { UtilityModule } from '@ga/utility';
import { DynamicTableModule } from './../../shared/dynamic-table/dynamic-table.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerComponent,
    AllCustomersComponent,

  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    UtilityModule,
    DynamicTableModule,
    SkeletonModule
  ]
})
export class CustomersModule { }
