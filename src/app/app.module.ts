import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EcparentComponent } from "./parent/ecparent.component";
import { EcchildComponent } from "./child/ecchild.component";

import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, EcparentComponent, EcchildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
