import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../User';
import { LoginInfo } from '../loginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      alert("An error occured, refresh the page and try again")
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Please make sure you enter the correct login details'));
  }

  constructor(private http: HttpClient) { }
  loginUser(loginInfo: LoginInfo){
    let params = new HttpParams();
    params = params.set('phoneNumber', loginInfo.phoneNumber);
    params = params.set('password', loginInfo.password);
    return this.http.get<User>('http://localhost:8080/app/v1/user/login', {params: params}).pipe(
      catchError(this.handleError)
    );
  }
}
