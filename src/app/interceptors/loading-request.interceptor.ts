import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize, timeout } from 'rxjs/operators';
import { LoadingRequestService } from '../services/loading-request.service';

@Injectable()
export class LoadingRequestInterceptor implements HttpInterceptor {
  constructor(private readonly loadingRequestService: LoadingRequestService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingRequestService.setIsLoadingRequest(true);
    return next.handle(request).pipe(
      timeout(700),
      delay(500),
      catchError(error => {
        this.loadingRequestService.setIsLoadingRequest(false);
        return throwError(error);
      }),
      finalize(() => {
        this.loadingRequestService.setIsLoadingRequest(false);
      })
    );
  }
}
