import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AccesGuard {

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.router.getCurrentNavigation()?.extras.state) {
            return true
        } else {
            this.router.navigate(['/heroes']);
            return false;
        }
    }
}