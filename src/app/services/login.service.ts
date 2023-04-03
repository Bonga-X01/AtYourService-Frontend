import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';
import { LoginInfo } from '../loginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUser(loginInfo: LoginInfo){
    let params = new HttpParams();
    params = params.set('phoneNumber', loginInfo.phoneNumber);
    params = params.set('password', loginInfo.password);
    return this.http.get<User[]>('http://localhost:8080/app/v1/user/login', {params: params});
  }
}
