import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root'
})
export class ServicesRestService {

    constructor(private http: HttpClient) { }

    getServices(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:8080/app/v1/user/all');
  }
}
