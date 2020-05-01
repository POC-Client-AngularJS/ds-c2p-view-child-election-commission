import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-ecchild",
  templateUrl: "./ecchild.component.html"
})
export class EcchildComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = "";
  seconds = 0;
  constructor() {}  
  ngOnInit() {
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }  
  clearTimer() {
    clearInterval(this.intervalId);
  }    
  start() {
    this.countDown();
  }  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 0) {
        this.message = "Completed counting!";
      } else {
        if (this.seconds < 0) {
          this.seconds = 50;
        } // reset
        this.message = `Vote-${this.seconds} and counting going on`;
      }
    }, 1000);
  }
}
