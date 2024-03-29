import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize, timeout } from 'rxjs/operators';
import { LoadingRequestService } from '../../services/loading-request.service';
import { Router } from '@angular/router';

@Injectable()
export class LoadingRequestInterceptor implements HttpInterceptor {
  constructor(
    private readonly loadingRequestService: LoadingRequestService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (navigator.onLine) {
      setTimeout(() => {
        this.loadingRequestService.setIsLoadingRequest(true);
      }, 200);
      return next.handle(request).pipe(
        delay(500),
        catchError(error => {
          this.loadingRequestService.setIsLoadingRequest(false);
          return throwError(error);
        }),
        finalize(() => {
          setTimeout(() => {
            this.loadingRequestService.setIsLoadingRequest(false);
          }, 250);
        })
      );
    } else {
      this.router.navigate(['/error/without-connection']);
      return throwError('Sin conexión')
    }

  }
}
