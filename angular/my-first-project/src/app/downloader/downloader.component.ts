import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent implements OnInit, OnDestroy{
  waitSec = 3;
  // disabledButton = true;
  // myInterval:NodeJS.Timeout;
  // disabledButton = true;
  // myInterval:NodeJS.Timeout;
  myInterval: ReturnType<typeof setInterval> | undefined;
  isDownloading = "";
  isTest = false;


  goToLinkButton() {
    // razni slojni obrabotki...
    // after -> route to /
    this.router.navigate(['test'], {relativeTo:this.route});
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {


  }
  startDownload() {
    this.isDownloading = " / download started ...";
  }
  ngOnInit(): void {

    this.isTest = (this.route.snapshot.url[1]!=undefined && this.route.snapshot.url[1].path=='test');
    console.log(this.route.snapshot);
  
    this.route.params.subscribe(
      (params: Params) =>{
       console.log(this.route.snapshot.params);
        this.isDownloading= (params['started']) ? " / download started ..." : "";
      }
    );

    this.myInterval = setInterval(() => {
      this.waitSec -= 1;
      if (this.waitSec == 0) {
        // make button unabled
        // this.disabledButton = false;
        if(this.myInterval) clearInterval(this.myInterval);
        this.router.navigate([],{queryParams:{started:1}, relativeTo:this.route});
        //console.log(this.route);
      }
    }, 1000);
  }
  ngOnDestroy(): void {
    if(this.myInterval) clearInterval(this.myInterval);
  }
}
