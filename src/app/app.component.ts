import { Component, OnInit } from '@angular/core';
import { LoadingRequestService } from './services/loading-request.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showLoader: boolean ;

  constructor(
    public loaderService: LoadingRequestService,
    private router: Router
    ){
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (!navigator.onLine)
          this.router.navigate(['/error/without-connection']);
        }
      });
  }
  
  ngOnInit(): void {
      this.loaderService.getIsLoadingRequest().subscribe(show=>this.showLoader=show);
  }

}
