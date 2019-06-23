import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public countryData:any;
  public airportData:any;
  public isEditable:boolean;

    constructor() {
    }

    public getIsEditable(){
      return this.isEditable;
    }

    public setIsEditable(isEditable:boolean):void{
      this.isEditable  = isEditable;
    }

    public getCountry(){
        return this.countryData;
    }

    public setCountry(countryData: any): void {
        this.countryData = countryData;
    }

    public getAirport(){
      return this.airportData;
  }

  public setAirport(airportData: any): void {
      this.airportData = airportData;
  }
}
