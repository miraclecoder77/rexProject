import { UpdateProductComponent } from './manage-products/update-product/update-product.component';
import { CategoriesComponent } from './product-categories/categories/categories.component';
import { UpdateComponent } from './manage-products/update/update.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent, 
           children: [
              {path: '', pathMatch: 'full', redirectTo: 'product' },
              {path: 'product', component: ProductsHomeComponent },
              {path: 'manage-products', component: ManageProductsComponent,
                    children: [
                      {path: '', pathMatch: 'full', redirectTo: 'update-product'},
                      {path: 'update-product', component: UpdateProductComponent},
                      {path: 'update', component: UpdateComponent}
                    ]},
              {path: 'product-categories', component: ProductCategoriesComponent,
                    children: [
                      { path: '', pathMatch: 'full', redirectTo: 'categories'},
                      { path: 'product-categories', component: ProductCategoriesComponent },
                      { path: 'categories', component: CategoriesComponent }
                    ]},
              {path: 'new-product', component: NewProductComponent}
           ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
