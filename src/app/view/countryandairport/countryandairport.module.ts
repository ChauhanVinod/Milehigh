import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { AirportComponent } from './airport/airport.component';
import { CountryAndAirportRoutingModule } from './country-and-airport-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { CountryandairportService } from './countryandairport.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatecountryComponent } from './country/createcountry/createcountry.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { CreateairportComponent } from './airport/createairport/createairport.component';


@NgModule({
  declarations: [
    CountryComponent,
     AirportComponent,
     CreatecountryComponent,
     CreateairportComponent
    ],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpModule,
    NgHttpLoaderModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    CountryAndAirportRoutingModule
  ],
  providers: [
    CountryandairportService,
    AuthGuardService
  ]
})
export class CountryandairportModule { }
