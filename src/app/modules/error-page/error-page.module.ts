import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { WithoutConnectionComponent } from './components/without-connection/without-connection.component';


@NgModule({
  declarations: [
    WithoutConnectionComponent
  ],
  imports: [
    CommonModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
