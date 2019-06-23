import { Component, OnInit } from '@angular/core';
import { CountryandairportService } from '../../countryandairport.service';
import { Router } from '@angular/router';
import * as jquery from 'jquery';
import { CreateAirportParameter } from './model/CreateAirportParameter';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/base/storage.service';

@Component({
  selector: 'app-createairport',
  templateUrl: './createairport.component.html'
})
export class CreateairportComponent implements OnInit {
   countryList:any;
   createAirportForm: FormGroup;
   createAirportParameter:CreateAirportParameter;
  loading = false;
  submitted = false;
   title :string;
   buttonTitle:string;
   airportCodeStr:string='';
   airportNameStr:string='';
   cityCodeStr:string='';
   cityNameStr:string='';
   countryNameId:number=1;
   isActive:boolean=false;
   countryData:any;

  constructor(private apiService:CountryandairportService,private router:Router
    ,private formBuilder: FormBuilder,private storageService:StorageService) { }

  ngOnInit() {
    if(this.storageService.getIsEditable()){
      this.title = 'Update Airport';
      this.buttonTitle = 'Update';
      this.airportCodeStr = this.storageService.getAirport().airports_code;
      this.airportNameStr=this.storageService.getAirport().airports_name;
      this.cityCodeStr=this.storageService.getAirport().cityCode;
      this.cityNameStr=this.storageService.getAirport().cityName;
      this.countryNameId=this.storageService.getAirport().country_id;
      this.isActive=(this.storageService.getAirport().is_active)?true:false;
  }else{
   this.title = 'Create Airport';
   this.buttonTitle = 'Submit';
  }

    this.createAirportForm = this.formBuilder.group({
      airportCode: [this.airportCodeStr, Validators.required],
      airportName: [this.airportNameStr, Validators.required],
      cityCode:[this.cityCodeStr,Validators.required],
      cityName:[this.cityNameStr,Validators.required],
      countryName:[this.countryNameId,Validators.required],
      isActive:[this.isActive,'']
      
  });

    jquery('.js-example-basic-single').select2();

    this.apiService.getCountry().subscribe((res)=>{
      this.apiService.customConsole('country list');
      this.apiService.customConsole(res.items);  
      this.countryList = res.items; 
    });
  }

  
   // convenience getter for easy access to form fields
   get f() { return this.createAirportForm.controls; }


   onSubmit() {
    this.submitted = true;
    //alert(this.f.isActive.value);
        // stop here if form is invalid
        if (this.createAirportForm.invalid) {
            return;
        }

        this.createAirportParameter = new CreateAirportParameter();
        if(this.storageService.getIsEditable()){
          this.createAirportParameter.id = this.storageService.getAirport().id;
        }else{
          this.createAirportParameter.id = '';
        }
        this.createAirportParameter.airports_code=this.f.airportCode.value;
        this.createAirportParameter.airports_name=this.f.airportName.value;
        this.createAirportParameter.cityCode = this.f.cityCode.value;
        this.createAirportParameter.cityName = this.f.cityName.value;
        this.createAirportParameter.timezone = 'a';
        this.createAirportParameter.latitude = '';
        this.createAirportParameter.longitude = ''; 
        this.createAirportParameter.country_id = this.f.countryName.value; 
        this.createAirportParameter.is_active=(this.f.isActive.value)?1:0;
    
        this.apiService.customConsole(this.createAirportParameter);
        
    this.apiService.createAirport(this.createAirportParameter).subscribe((res)=>{
      this.apiService.customConsole(res);  
      if(res.status==='success'){
            if(this.storageService.getIsEditable()){
           window.history.back();
         }else{
          this.createAirportForm.reset();
         }
      }else if(res.status=='Invalid AccessToken'){
        alert('token expire re-login again');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
      }
    });
  }

}
