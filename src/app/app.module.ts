import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {environment} from '../environments/environment.prod';
import {AppComponent} from './app.component';
import {consoleLogServiceInstance, logServiceToken} from './logServiceToken';


const routes: Routes = [
  {
    path: 'Route',
    loadChildren: () => import('./schedule/schedule.module').then(mod => mod.ScheduleModule)
  },
  {path: '', redirectTo: 'Route/17A', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    // ScheduleComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule, NgbModule, NgxSpinnerModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: !environment.production} // <-- debugging purposes only
    )
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  },
    {provide: logServiceToken, useValue: consoleLogServiceInstance}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
