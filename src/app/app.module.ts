import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {environment} from '../environments/environment.prod';
import {AppComponent} from './app.component';
import {consoleLogServiceInstance, logServiceToken} from './logServiceToken';

import {ScheduleModule} from './schedule/schedule.module';


@NgModule({
  declarations: [
    AppComponent,
    // ScheduleComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule, NgbModule, NgxSpinnerModule,
    RouterModule.forRoot(
      [],
      {enableTracing: !environment.production} // <-- debugging purposes only
    ),
    ScheduleModule
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  },
    {provide: logServiceToken, useValue: consoleLogServiceInstance}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
