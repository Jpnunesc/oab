
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';


import { AppComponent } from './app.component';


import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './components/auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layouts/layout.module';
import { ToastrModule } from 'ngx-toastr';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


registerLocaleData(localePt, 'pt');

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
  ],
    declarations: [AppComponent],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
