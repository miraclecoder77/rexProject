import { DetailsComponent } from './details/details.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

const routes: Routes = [{ path: '', component: ShopComponent ,
                        children: [
                          { path: '', pathMatch: 'full', redirectTo: 'transactions' },
                          { path: 'transactions', component: TransactionsComponent },
                          { path: 'inventory', component: InventoryComponent },
                          { path: 'details', component: DetailsComponent },
                        ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
