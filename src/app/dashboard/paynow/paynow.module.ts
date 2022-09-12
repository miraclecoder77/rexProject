import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaynowRoutingModule } from './paynow-routing.module';
import { PaynowComponent } from './paynow.component';
import { PaynowHomeComponent } from './paynow-home/paynow-home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PayAdvanceComponent } from './pay-advance/pay-advance.component';
import { RexpayComponent } from './rexpay/rexpay.component';
import { RexpayHomeComponent } from './rexpay-home/rexpay-home.component';


@NgModule({
  declarations: [
    PaynowComponent,
    PaynowHomeComponent,
    SubscriptionComponent,
    PayAdvanceComponent,
    RexpayComponent,
    RexpayHomeComponent
  ],
  imports: [
    CommonModule,
    PaynowRoutingModule
  ]
})
export class PaynowModule { }
