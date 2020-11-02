import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*** Components  */
import { StockFormComponent } from './clientforms/stock-form.component';

import { AuthenticateComponent } from "./authentication/authenticate.component";


const routes: Routes = [
  { path: '', component: AuthenticateComponent}, //, data: {title: 'Đăng nhập'}
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
