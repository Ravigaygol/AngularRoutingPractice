import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './FirstRoutingComponents/home/home.component';
import { ContactComponent } from './FirstRoutingComponents/contact/contact.component';
import { ProductComponent } from './FirstRoutingComponents/product/product.component';
import { ErrorComponent } from './FirstRoutingComponents/error/error.component';
import { ProductDetailComponent } from './FirstRoutingComponents/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from './FirstRoutingComponents/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductGuardService } from './GuardServices/product-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductServiceService,ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
