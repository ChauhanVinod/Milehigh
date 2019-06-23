import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/base/Constant';
import { APIService } from 'src/app/service/api.service';
import { CreateCountryParameter } from './country/createcountry/model/CreateCountryParameter';
import { CreateAirportParameter } from './airport/createairport/model/CreateAirportParameter';

@Injectable({
  providedIn: 'root'
})
export class CountryandairportService {

  apiURL: string = Constant.apiBaseUrl;
  user:any;
  //headersAuth:any;
  constructor(private httpClient: HttpClient,private apiMainService:APIService) { 

  }

  public customConsole(consoleData:any){
   this.apiMainService.customConsole(consoleData);
 }

  public getCountry():Observable<any>{
    const headersAuth = new  HttpHeaders({'Accept': 'application/json', 'api-token':Constant.apiToken});
    return this.httpClient.get<any>(`${this.apiURL}/country`,{headers:headersAuth})
  }
  
  public getAirport():Observable<any>{
    const headersAuth = new  HttpHeaders({'Accept': 'application/json', 'api-token':Constant.apiToken});
    return this.httpClient.get<any>(`${this.apiURL}/airport`,{headers:headersAuth});
  }

  public createCountry(createCountryParameter:CreateCountryParameter): Observable<any>{
    this.user =JSON.parse(localStorage.getItem('currentUser')) ;
    const headersAuth = new  HttpHeaders({'Content-Type': 'application/json', 'access-token': this.user.data.access_token});
    return this.httpClient.post<any>(`${this.apiURL}/createCountry`, createCountryParameter,{headers:headersAuth});
}

public createAirport(createAirportParameter:CreateAirportParameter): Observable<any>{
  this.user =JSON.parse(localStorage.getItem('currentUser')) ;
  const headersAuth = new  HttpHeaders({'Content-Type': 'application/json', 'access-token': this.user.data.access_token});
  return this.httpClient.post<any>(`${this.apiURL}/createAirport`, createAirportParameter,{headers:headersAuth});
}

}
