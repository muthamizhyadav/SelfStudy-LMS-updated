import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NotifierService } from '../service/notifier.service';
import { DataHandlerService } from '../service/datahandler.service';

export const routeGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any => {

  const authService = inject(DataHandlerService);
  const router = inject(Router);
  const toaster = inject(NotifierService);

  if (router.getCurrentNavigation()?.trigger === 'popstate') {
    return false;
  } else {

    if (authService.getToken()) {
      if (authService.checkMainDashboard()) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      router.navigate(['login']);
      return false;
    }
  }

};
