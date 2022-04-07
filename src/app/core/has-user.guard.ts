import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasUserGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.hasUser()) {
        return true;
      } else{
        this.router.navigate(['/login'])
        return false;
      }
  }

  hasUser(): boolean {
    const data = JSON.parse(localStorage.getItem('userData')!);
    if(data) {
      return true;
    }else{
      return false;
    }
  }
  
}