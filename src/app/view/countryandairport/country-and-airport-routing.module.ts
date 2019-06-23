import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { AirportComponent } from './airport/airport.component';
import { CreatecountryComponent } from './country/createcountry/createcountry.component';
import { CreateairportComponent } from './airport/createairport/createairport.component';

const routes :Routes=[
  {
    path: '',
    data: {
      title: 'Country And Airports'
    },
    children: [
      {
        path: '',
        redirectTo: 'country'
      },
      {
        path: 'country',
        component: CountryComponent,
        data: {
          title: 'Countries'
        }
      },
      {
        path: 'airport',
        component: AirportComponent,
        data: {
          title: 'Airports'
        }
      },
      {
        path: 'createcountry',
        component: CreatecountryComponent,
        data: {
          title: 'Create And Update Country'
        }
      },
      {
        path: 'createairport',
        component: CreateairportComponent,
        data: {
          title: 'Create and Update Airport'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryAndAirportRoutingModule { }
