import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CountryandairportService } from '../countryandairport.service';
import * as jquery from 'jquery';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/base/storage.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {
 countryList:any;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any> = new Subject();


  constructor(private apiService:CountryandairportService,private router:Router,private storageService:StorageService) { }

  ngOnInit() {
    jquery('.js-example-basic-single').select2();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10
      
     };
     
    this.apiService.getCountry().subscribe((res)=>{
      this.apiService.customConsole('country list');
      this.apiService.customConsole(res.items);  
      this.countryList = res.items;  
      this.dtTrigger.next()
    });
  }

  updateCountry(countryData:any){
    this.storageService.setCountry(countryData);
    this.storageService.setIsEditable(true);
    this.router.navigate(['/countryandairport/createcountry']);
  }

  addNewCountry(){
    this.storageService.setIsEditable(false);
    this.router.navigate(['/countryandairport/createcountry']);
  }

}
