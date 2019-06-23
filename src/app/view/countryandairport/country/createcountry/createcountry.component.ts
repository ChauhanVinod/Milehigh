import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateCountryParameter } from './model/CreateCountryParameter';
import { CountryandairportService } from '../../countryandairport.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/base/storage.service';

@Component({
  selector: 'app-createcountry',
  templateUrl: './createcountry.component.html'
})
export class CreatecountryComponent implements OnInit {
 createCountryForm: FormGroup;
 createCountryParameter:CreateCountryParameter;
  loading = false;
  submitted = false;
 title :string;
 buttonTitle:string;
 countryCodeStr:string='';
 countryNameStr:string='';
 currencyCodeStr:string='';
 isActive:boolean=false;
 countryData:any;

  constructor(private formBuilder: FormBuilder,private apiService:CountryandairportService,
    private router:Router,private storageService:StorageService) { }

  ngOnInit() {
     if(this.storageService.getIsEditable()){
         this.title = 'Update Country';
         this.buttonTitle = 'Update';
         this.countryCodeStr = this.storageService.getCountry().country_code;
         this.countryNameStr=this.storageService.getCountry().country_name;
         this.currencyCodeStr=this.storageService.getCountry().code;
         this.isActive=(this.storageService.getCountry().is_active)?true:false;
     }else{
      this.title = 'Create Country';
      this.buttonTitle = 'Submit';
     }

    this.createCountryForm = this.formBuilder.group({
      countryCode: [this.countryCodeStr, Validators.required],
      countryName: [this.countryNameStr, Validators.required],
      currencyCode:[this.currencyCodeStr,Validators.required],
      isActive:[this.isActive,'']
  });

  }


   // convenience getter for easy access to form fields
   get f() { return this.createCountryForm.controls; }


   onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.createCountryForm.invalid) {
            return;
        }

        this.createCountryParameter = new CreateCountryParameter();
        if(this.storageService.getIsEditable()){
          this.createCountryParameter.id = this.storageService.getCountry().id;
        }else{
          this.createCountryParameter.id = '';
        }
      
        this.createCountryParameter.country_code=this.f.countryCode.value;
        this.createCountryParameter.country_name=this.f.countryName.value;
        this.createCountryParameter.currency_code = this.f.currencyCode.value;
        this.createCountryParameter.is_active = (this.f.isActive.value)?1:0; 
    
        this.apiService.customConsole(this.createCountryParameter); 
        
    this.apiService.createCountry(this.createCountryParameter).subscribe((res)=>{
      this.apiService.customConsole(res);  
      if(res.status==='success'){
         if(this.storageService.getIsEditable()){
           window.history.back();
         }else{
          this.createCountryForm.reset();
         }
     
      }else if(res.status=='Invalid AccessToken'){
        alert('token expire re-login again');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
      }
    });
  }

  resetForm(){
    this.createCountryForm.reset();
  }
}
