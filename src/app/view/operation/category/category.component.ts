import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { APIService } from 'src/app/service/api.service';
import { Constant } from 'src/app/base/Constant';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  categoryList:any;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any> = new Subject();
  imageBaseUrl:string = Constant.imageBaseUrl;

  constructor(private apiService:APIService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10
     };
     
    this.apiService.getCategory().subscribe((res)=>{
      this.apiService.customConsole('category list');
      this.apiService.customConsole(res.items);  
      this.categoryList = res.items;  
      this.dtTrigger.next()
    });
  }
}
