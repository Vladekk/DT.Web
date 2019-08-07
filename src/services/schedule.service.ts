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

  private takeHowMuch = 3;
  private readonly dataSupplier: Observable<[Date[], Date[]]>;

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

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.dataSupplier = this.http.get<[string[], string[]]>(configService.ScheduleServiceUrl)
      .pipe(map(this.fixDates));
  }


  GetScheduleInfo(): Observable<[Date[], Date[]]> {
    return this.dataSupplier;
  }
}
