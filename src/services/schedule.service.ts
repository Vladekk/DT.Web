import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import bind from 'bind-decorator';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ConversionDirection, DtUtils} from '../../../DT-Backend/src/services/DtUtils/dtUtils';
import {ISimpleLogService} from '../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';
import {logServiceToken} from '../app/logServiceToken';
import {Route} from '../app/Route';
import {IGetScheduleInfo} from '../IGetScheduleInfo';
import ConfigService from './config.service';

export class ScheduleService implements IGetScheduleInfo {

  private readonly routeDataSupplier: Observable<Route[]>;
  private takeHowMuch = 3;

  constructor(private http: HttpClient, private configService: ConfigService,
              @Inject(logServiceToken) private logService: ISimpleLogService) {

    this.routeDataSupplier = this.http.post<Route[]>(configService.ScheduleServiceUrl + 'GetAllRoutes', {}, {
      headers:
        {'Content-Type': 'application/json'}
    });
  }

  @bind
  getProperDate (str): Date {
    const date = new Date(Date.parse(str));
    return DtUtils.DateToUtcAndBack(date, ConversionDirection.FromUtc);

  };
  @bind
  fixDates ([fromCenter, toCenter]: [string[], string[]]) {
    // this is hack to parse dates in json
    const result: [Date[], Date[]] =
      [fromCenter.map(this.getProperDate).slice(0, this.takeHowMuch),
        toCenter.map(this.getProperDate).slice(0, this.takeHowMuch)];
    return result;
  };

  GetScheduleInfo(busNumber: string): Observable<[Date[], Date[]]> {
    this.logService.Log(`Subscribing to fetch route data ${busNumber}`);
    return this.http.post<[string[], string[]]>(this.configService.ScheduleServiceUrl + 'GetClosestRuns', {BusNumber: busNumber}, {
      headers:
        {'Content-Type': 'application/json'}
    })
      .pipe(map(this.fixDates));
  }

  GetAllRoutes(): Observable<Route[]> {
    return this.routeDataSupplier;
  }
}
