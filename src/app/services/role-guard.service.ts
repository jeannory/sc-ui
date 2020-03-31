import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { KeycloakSecurityService } from './keycloak-security.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  roles = [];

  constructor(
    public securityService: KeycloakSecurityService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.getAccessRole();
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoleArray = route.data;
    let i = 0;
    while (i < expectedRoleArray.expectedRole.length) {
      let j = 0;
      while (j < this.roles.length) {
        if (expectedRoleArray.expectedRole[i] === this.roles[j]) {
          return true;
        }
        j++;
      }
      i++;
    }
    this.snackBar.open('You are not authorized to access this page.', 'ok', {
      panelClass: 'snackbar-error',
      verticalPosition: 'top',
      duration: 5000,
    });
    this.router.navigate(['/home']);
    return false;
  }

  private getAccessRole(): void {
    if (this.securityService.kc.hasRealmRole('user')) {
      this.roles.push('user');
    }
    if (this.securityService.kc.hasRealmRole('manager')) {
      this.roles.push('manager');
    }
  }
}
