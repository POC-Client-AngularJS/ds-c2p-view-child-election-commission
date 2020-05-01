import { Component, OnInit, ViewChild } from "@angular/core";
import { EcchildComponent } from "../child/ecchild.component";

@Component({
  selector: "app-ecparent",
  templateUrl: "./ecparent.component.html"
})
export class EcparentComponent implements OnInit {
  @ViewChild(EcchildComponent)
  private counterComponent: EcchildComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    /*
     * Redefine 'seconds()' to get from the 'CountdownTimerComponent.seconds'.
     * But, wait a tick first to avoid one-time devMode unidirectional-data-flow-violation error.
     */
    setTimeout(() => (this.seconds = () => this.counterComponent.seconds), 0);
  }

  seconds() {
    return 0;
  }

  start() {
    this.counterComponent.start();
  }
  
  stop() {
    this.counterComponent.stop();
  }
}
