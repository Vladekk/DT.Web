/* tslint:disable:semicolon */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IGetScheduleInfo} from '../IGetScheduleInfo';
import {ConfigService} from './config.service';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements IGetScheduleInfo {

  private readonly routeDataSupplier: Observable<Array<string[]>>;

  private takeHowMuch = 3;
  private readonly dataSupplier: Observable<[Date[], Date[]]>;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.dataSupplier = this.http.post<[string[], string[]]>(configService.ScheduleServiceUrl + 'GetClosestRuns', {BusNumber: '17A'}, {
      headers:
        {'Content-Type': 'application/json'}
    })
      .pipe(map(this.fixDates));

    this.routeDataSupplier = this.http.post<Array<string[]>>(configService.ScheduleServiceUrl + 'GetAllRoutes', {}, {
      headers:
        {'Content-Type': 'application/json'}
    });
  }

  getProperDate = (str): Date => {
    const date = new Date(Date.parse(str));
    return date;
  };

  fixDates = ([fromCenter, toCenter]: [string[], string[]]) => {
    // this is hack to parse dates in json
    const result: [Date[], Date[]] =
      [fromCenter.map(this.getProperDate).slice(0, this.takeHowMuch),
        toCenter.map(this.getProperDate).slice(0, this.takeHowMuch)];
    return result;
  };


  GetScheduleInfo(): Observable<[Date[], Date[]]> {
    return this.dataSupplier;
  }

  GetAllRoutes(): Observable<Array<string[]>> {
    return this.routeDataSupplier;
  }
}
