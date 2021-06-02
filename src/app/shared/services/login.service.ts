import { Backend } from './../utils/backend';
import { LoginInput } from './../models/login-input';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public realizarLogin(loginInput: LoginInput): Observable<any>{
    return this.http.post(Backend.baseLogin, loginInput)
  }
}
