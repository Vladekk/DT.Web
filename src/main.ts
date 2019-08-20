import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
//
// declare var zonedTimeToUtc1: any;
// window.zonedTimeToUtc1 = zonedTimeToUtc;
// declare var utcToZonedTime1: any;
// window.utcToZonedTime1 = utcToZonedTime;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
