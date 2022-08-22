import { NewProductComponent } from './new-product/new-product.component';
import { CheckStockComponent } from './check-stock/check-stock.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
{path: 'manage-products', component: ManageProductsComponent},
{path: 'product-categories', component: ProductCategoriesComponent},
{path: 'check-stock', component: CheckStockComponent},
{path: 'new-product', component: NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
