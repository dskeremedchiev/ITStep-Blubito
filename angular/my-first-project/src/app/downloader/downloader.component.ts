import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent implements OnInit{
  waitSec = 3;
  // disabledButton = true;
  // myInterval:NodeJS.Timeout;
  myInterval: ReturnType<typeof setInterval>;
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
    this.myInterval = setInterval(() => {
      this.waitSec -= 1;
      if (this.waitSec == 0) {
        // make button unabled
        // this.disabledButton = false;
        clearInterval(this.myInterval);
        router.navigate([],{queryParams:{started:1}, relativeTo:route});
        console.log(route);
      }
    }, 1000);

  }
  startDownload() {
    this.isDownloading = " / download started ...";
  }
  ngOnInit(): void {
    console.log();
    this.isTest = (this.route.snapshot.url[1]!=undefined && this.route.snapshot.url[1].path=='test');
    this.route.params.subscribe(
      (params: Params) =>{
        console.log(params);
        this.isDownloading= (params['started']) ? " / download started ..." : "";
      }
    );
  }
}
