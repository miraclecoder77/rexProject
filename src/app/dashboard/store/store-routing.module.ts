import { AllStoreComponent } from './all-store/all-store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [{ path: '', component: StoreComponent ,
                          children: [
                            { path: '', pathMatch: 'full', redirectTo: 'all-store' },
                            {path: "all-store", component: AllStoreComponent},
                            { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
                          ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
