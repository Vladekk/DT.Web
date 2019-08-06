/* tslint:disable:semicolon */
import {Injectable} from '@angular/core';
import {IGetScheduleInfo} from '../IGetScheduleInfo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as dateFns from 'date-fns';
import {ConfigService} from './config.service';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements IGetScheduleInfo {

  private takeHowMuch = 3;
  private readonly dataSupplier: Observable<[Date[], Date[]]>;

  getProperDate = (str): Date => {
    const date = new Date(Date.parse(str));
    return dateFns.addHours(date, -3);
  };

  fixDates = ([fromCenter, toCenter]: [string[], string[]]) => {
    // this is hack to parse dates in json
    const result: [Date[], Date[]] =
      [fromCenter.map(this.getProperDate).slice(0, this.takeHowMuch),
        toCenter.map(this.getProperDate).slice(0, 3)];
    return result;
  };

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.dataSupplier = this.http.get<[string[], string[]]>(configService.ScheduleServiceUrl)
      .pipe(map(this.fixDates));
  }


  GetScheduleInfo(): Observable<[Date[], Date[]]> {
    return this.dataSupplier;
  }
}
