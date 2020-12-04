import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate {

  constructor(private _router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
    console.log("canActivate");
    alert("You are not allowed to view this page");
    this._router.navigate(["home"]);
    return false;
  }
}

