import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtauth } from '../auth/jwtauth';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private url = "http://localhost:8080";

  constructor(private http:HttpClient,private jwt: jwtauth) { }

  private headers_req = new HttpHeaders().set("Authorization",this.jwt.getToken());

  public getAtivities(): Observable<Activity[]>{
    return this.http.get<Activity[]>(`${this.url}/activities`,{headers:this.headers_req})
  }
}
