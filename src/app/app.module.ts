import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';// form editor phải add import link ở đây
import { StockFormComponent } from './clientforms/stock-form.component';
import { AuthenticateComponent } from './authentication/authenticate.component';


@NgModule({
  declarations: [
    AppComponent,
    StockFormComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // form editor phải add module ở đây
    ReactiveFormsModule, // form editor phải add module ở đây
    HttpClientModule, // sử dụng api thì phải thêm module này
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
