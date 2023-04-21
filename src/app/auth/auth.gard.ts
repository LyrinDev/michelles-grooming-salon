import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, take, map } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
constructor(private authservice: AuthService,
    private router: Router){}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):     
| boolean
| UrlTree
| Promise<boolean | UrlTree>
| Observable<boolean | UrlTree>{    
        return this.authservice.user.pipe(
            take(1),
            map(user =>{
                const isauth = !!user;
                if(isauth){
                    return true;
                }
                return this.router.createUrlTree(['/auth'])
            })
        )
    } 
}



