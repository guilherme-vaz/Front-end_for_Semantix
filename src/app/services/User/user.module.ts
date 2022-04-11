import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipe } from 'ng2-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipe,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
