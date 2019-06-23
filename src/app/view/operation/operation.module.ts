import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { OperationRoutingModule } from './operation-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { APIService } from 'src/app/service/api.service';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AuthGuardService } from 'src/app/service/auth-guard.service';


@NgModule({
  declarations: [CategoryComponent, SubcategoryComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpModule,
    NgHttpLoaderModule.forRoot(),
    HttpClientModule,
    OperationRoutingModule
  ],
  providers: [
    APIService,
    AuthGuardService
  ]
})
export class OperationModule { }
