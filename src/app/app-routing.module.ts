import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './error/p404/p404.component';
import { P500Component } from './error/p500/p500.component';
import { LoginComponent } from './login/login/login.component';
import { DefaultlayoutComponent } from './containers/defaultlayout/defaultlayout.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    canActivate :[AuthGuardService],
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    canActivate :[AuthGuardService],
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultlayoutComponent,
    canActivate :[AuthGuardService],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component:DashboardComponent,
        data:{
          title:'Dashboard'
        }
      },
      {
        path: 'countryandairport',
        loadChildren: './view/countryandairport/countryandairport.module#CountryandairportModule'
      },
      {
        path: 'operation',
        loadChildren: './view/operation/operation.module#OperationModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
