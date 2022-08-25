
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { CheckStockComponent } from './check-stock/check-stock.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { UpdateComponent } from './manage-products/update/update.component';
import { CategoriesComponent } from './product-categories/categories/categories.component';
import { UpdateProductComponent } from './manage-products/update-product/update-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ManageProductsComponent,
    ProductCategoriesComponent,
    CheckStockComponent,
    NewProductComponent,
    UpdateProductComponent,
    ProductsHomeComponent,
    UpdateComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
