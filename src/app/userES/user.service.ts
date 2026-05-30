import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtauth } from '../auth/jwtauth';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = 'http://localhost:8080';


  constructor(private http: HttpClient, private jwt: jwtauth) { }

  private head_obj = new HttpHeaders().set("Authorization", this.jwt.getToken());

  public getUserData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/getusers`, { headers: this.head_obj });
  }

  public addUser(employee: User[]): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/postuser`, employee);
  }



  // public addEmployee(employee: User): Observable<User> {
  //   return this.http.post<User>(`${this.apiServerUrl}/addEmp`, employee);
  // }

  // public addEmployeein(employee: User): Observable<User> {
  //   return this.http.post<User>(`${this.apiServerUrl}/addEmp`, employee);
  // }


  // public updateEmployee(employee: User): Observable<User> {
  //   return this.http.put<User>(`${this.apiServerUrl}/editEmp`, employee,{headers:this.head_obj});
  // }

  // public deleteEmployee(Id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/delEmp/${Id}`,{headers:this.head_obj});
  // }

  // findByTitle(title: any): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiServerUrl}?title=${title}`);
  // }
  // getAll(params: any): Observable<any> {
  //   return this.http.get<any>(this.apiServerUrl, { params });
  // }
  // get(id: any): Observable<User> {
  //   return this.http.get<User>(`${this.apiServerUrl}/${id}`);
  // }
}

