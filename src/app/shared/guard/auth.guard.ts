import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    // canActivate() {
    //     if (this.authService.isAuthenticated()) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('auth guard started');
        return this.authService
            .isAuthenticated()
            .then((isAuthenticated: boolean) => {
                if (isAuthenticated) {
                    console.log('auth guard success');
                    return true;
                } else {
                    console.log('auth guard failed');
                    this.router.navigate(['/login']);
                    return false;
                }
            });
    }
}
