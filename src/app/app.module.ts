import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {WarningAlertComponentComponent} from './warning-alert-component/warning-alert-component.component';
import {SuccessAlertComponentComponent} from './success-alert-component/success-alert-component.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponentComponent,
    SuccessAlertComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
