import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'interfaces/user';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    
    if(localStorage.getItem('userData')) {
    const user = JSON.parse(localStorage.getItem('userData')!);
    const token = user.accessToken;
      request = request.clone({
        setHeaders: {
         'X-Authorization': token,
         'Content-Type': 'application/json'
        }
      })
  
    }
    return next.handle(request);
  }
}
