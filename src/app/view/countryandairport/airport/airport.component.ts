import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CountryandairportService } from '../countryandairport.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/base/storage.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html'
})
export class AirportComponent implements OnInit {
  airportList:any;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any> = new Subject();


  constructor(private apiService:CountryandairportService,private router:Router,
    private storageService:StorageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10
     };
     
    this.apiService.getAirport().subscribe((res)=>{
      this.apiService.customConsole('airport list');
      this.apiService.customConsole(res.items);  
      this.airportList = res.items;  
      this.dtTrigger.next();
    });
  }

  
  updateAirport(airportData:any){
    this.storageService.setAirport(airportData);
    this.storageService.setIsEditable(true);
    this.router.navigate(['/countryandairport/createairport']);
  }


  addNewAirport(){
    this.storageService.setIsEditable(false);
    this.router.navigate(['/countryandairport/createairport']);
  }

}
