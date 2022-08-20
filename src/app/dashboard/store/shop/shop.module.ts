import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DetailsComponent } from './details/details.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    ShopComponent,
    TransactionsComponent,
    DetailsComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
