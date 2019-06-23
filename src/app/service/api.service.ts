import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../login/login/model/User';
import { LoginParameter } from '../login/login/model/LoginParameter';
import { Constant } from '../base/Constant';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  apiURL: string = Constant.apiBaseUrl;
  //headersAuth:any;
  constructor(private httpClient: HttpClient) { 

  }

  public customConsole(consoleData:any){
     console.log(consoleData);
  }

  public login(loginParameter:LoginParameter): Observable<User>{
    const headersAuth = new  HttpHeaders({'Content-Type': 'application/json', 'api-token':Constant.apiToken});
    return this.httpClient.post<User>(`${this.apiURL}/signin`, loginParameter,{headers:headersAuth});
}


public getCategory():Observable<any>{
  const headersAuth = new  HttpHeaders({'Accept': 'application/json', 'access-token':Constant.accessTokenTesting});
  return this.httpClient.get<any>(`${this.apiURL}/category`,{headers:headersAuth});
}
}
