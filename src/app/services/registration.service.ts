import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    let params = new HttpParams();
    params = params.set('firstName', user.firstName);
    params = params.set('lastName', user.lastName);
    params = params.set('email', user.email);
    params = params.set('password', user.password);
    params = params.set('phoneNumber', user.phoneNumber);
    params = params.set('serviceType', user.serviceType);
    params = params.set('city', user.city);
    params = params.set('imageUrl', user.imageUrl);
    return this.http.post<User>('http://localhost:8080/app/v1/user/register', user, {params: params});
  }
}
