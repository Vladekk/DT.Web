// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   ScheduleServiceUrl: 'http://localhost:3000/api/GetClosestRuns',
  // ScheduleServiceUrl: 'https://upside.down.pictures/api/GetClosestRuns',
  // SchedulePageUrl: 'http://satiksme.daugavpils.lv/autobuss-nr-17a-autoosta-csdd-jaunforstadte',
  AllSchedulesUrl: 'http://www.satiksme.daugavpils.lv/autobusu-kustibu-saraksts'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
