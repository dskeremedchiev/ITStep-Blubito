import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent {
  waitSec = 3;
  // disabledButton = true;
  // myInterval:NodeJS.Timeout;
  myInterval: ReturnType<typeof setInterval>;
  isDownloading = "";


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
      }
    }, 1000)
  }
  startDownload() {
    this.isDownloading = " / download started ...";
  }
}
