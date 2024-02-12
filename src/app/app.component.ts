import { Component, OnInit } from '@angular/core';
import { LoadingRequestService } from './services/loading-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showLoader: boolean = false;

  constructor(
    public loaderService: LoadingRequestService,
    ){
  }
  ngOnInit(): void {
    this.loaderService.getIsLoadingRequest().subscribe(show=>this.showLoader=show);
  }

}
