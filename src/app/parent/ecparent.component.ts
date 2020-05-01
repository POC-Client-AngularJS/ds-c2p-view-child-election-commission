/*
 * Import "ViewChild" to provide the particular
 * component as view child.
 */
import { Component, OnInit, ViewChild } from "@angular/core";
/*
 * Import "EcchildComponent" to provide the
 * component as view child.
 */
import { EcchildComponent } from "../child/ecchild.component";

@Component({
  selector: "app-ecparent",
  templateUrl: "./ecparent.component.html"
})
export class EcparentComponent implements OnInit {
  /*
   * Supply child component as "ViewChild".
   */
  @ViewChild(EcchildComponent)
  private counterComponent: EcchildComponent;
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {
    /*
     * Redefine 'seconds()' to get from the
     * 'CountdownTimerComponent.seconds'.
     * But, wait a tick first to avoid one-time devMode
     * unidirectional-data-flow-violation error.
     */
    setTimeout(() => (this.seconds = () => this.counterComponent.seconds), 0);
  }
  seconds() {
    return 0;
  }
  start() {
    /*
     * Code to call "start" event of child component.
     */
    this.counterComponent.start();
  }
  stop() {
    /*
     * Code to call "stop" event of child component.
     */
    this.counterComponent.stop();
  }
}
