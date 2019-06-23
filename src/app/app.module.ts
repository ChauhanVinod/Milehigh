import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { LoginComponent } from './login/login/login.component';
import { P404Component } from './error/p404/p404.component';
import { P500Component } from './error/p500/p500.component';
import { DefaultlayoutComponent } from './containers/defaultlayout/defaultlayout.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AuthGuardService } from './service/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    P404Component,
    P500Component,
    DefaultlayoutComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    HttpModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [
    APIService,
    AuthGuardService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
