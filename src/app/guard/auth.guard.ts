import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AthuService } from '../servies/athu.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { 
  constructor(private authService: AthuService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService){
        return true;
      } else {
        return this.router.parseUrl('/login');
      }
  }
  
}
