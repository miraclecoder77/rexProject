import { PayAdvanceComponent } from './pay-advance/pay-advance.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RexpayHomeComponent } from './rexpay-home/rexpay-home.component';
import { RexpayComponent } from './rexpay/rexpay.component';
import { PaynowHomeComponent } from './paynow-home/paynow-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaynowComponent } from './paynow.component';

const routes: Routes = [{ path: '', component: PaynowComponent ,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'now' },
          { path: 'now', component: PaynowHomeComponent },
          { path: 'rexpay', component: RexpayComponent ,
                  children: [
                    { path: '', pathMatch: 'full', redirectTo: 'home' },
                    { path: 'home', component: RexpayHomeComponent },
                    { path: 'sub', component: SubscriptionComponent },
                    { path: 'advance', component: PayAdvanceComponent },
                  ]},
        ]
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaynowRoutingModule { }
