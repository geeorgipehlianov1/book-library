import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userData: {email: string, password: string}): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3030/users/login', userData);
  }
}
