import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { AllStoreComponent } from './all-store/all-store.component';


@NgModule({
  declarations: [
    StoreComponent,
    AllStoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
  ]
})
export class StoreModule { }
