import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IGetScheduleInfo} from '../IGetScheduleInfo';
import {ConfigService} from './config.service';
import {Route} from '../app/Route';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements IGetScheduleInfo {

  private readonly routeDataSupplier: Observable<Route[]>;

  private takeHowMuch = 3;


  constructor(private http: HttpClient, private configService: ConfigService) {


    this.routeDataSupplier = this.http.post<Route[]>(configService.ScheduleServiceUrl + 'GetAllRoutes', {}, {
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


  GetScheduleInfo(busNumber: string): Observable<[Date[], Date[]]> {
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



