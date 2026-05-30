import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtauth } from './jwtauth';

@Injectable({
  providedIn: 'root'
})
export class JwtauthService {

  constructor(private http: HttpClient,private jwtauthser : jwtauth ) { }

  requestHeaders = new HttpHeaders(
    {"No-Auth":"True"}
  )
  private apiServerUrl = 'http://localhost:8080';

  public login(loginData: any){
    return this.http.post(this.apiServerUrl+"/authenticate",loginData,{headers:this.requestHeaders})
  }
}

