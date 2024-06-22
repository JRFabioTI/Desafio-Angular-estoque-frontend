import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponentComponent } from './app-component/app-component.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponentComponent,
    LoginComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    TableModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponentComponent]
})
export class AppModule { }
