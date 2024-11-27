import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { DataHandlerService } from './datahandler.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const dataHandlerService = inject(DataHandlerService);
  const authToken = dataHandlerService.getToken();
  if (authToken) {
    // Clone the request and add the authorization header
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken),
    });
    // Pass the cloned request with the updated header to the next handler
    return next(authReq);
  }
  else {
    return next(req);
  }
};

