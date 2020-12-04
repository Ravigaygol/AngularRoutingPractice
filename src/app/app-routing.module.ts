import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './FirstRoutingComponents/contact/contact.component';
import { ErrorComponent } from './FirstRoutingComponents/error/error.component';
import { HomeComponent } from './FirstRoutingComponents/home/home.component';
import { ProductDetailComponent } from './FirstRoutingComponents/product-detail/product-detail.component';
import { ProductComponent } from './FirstRoutingComponents/product/product.component';
import { ProductGuardService } from './GuardServices/product-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  /*    { path: 'product', component: ProductComponent,canActivate:[ProductGuardService] },*/
  {
    path: 'product', component: ProductComponent,
    children: [
      { path: 'productDetails/:id', component: ProductDetailComponent }
    ]
  },
  /*   { path: 'product/:id', component: ProductDetailComponent },*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
