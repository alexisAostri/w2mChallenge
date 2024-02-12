import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingRequestService {
  private isLoadingRequest$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public getIsLoadingRequest(): Observable<boolean> {
    return this.isLoadingRequest$;
  }

  public setIsLoadingRequest(status: boolean) {
    this.isLoadingRequest$.next(status);
  }
}
