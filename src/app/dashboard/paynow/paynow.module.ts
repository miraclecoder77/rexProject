import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaynowRoutingModule } from './paynow-routing.module';
import { PaynowComponent } from './paynow.component';


@NgModule({
  declarations: [
    PaynowComponent
  ],
  imports: [
    CommonModule,
    PaynowRoutingModule
  ]
})
export class PaynowModule { }
