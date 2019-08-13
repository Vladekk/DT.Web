import {Observable} from 'rxjs';

export interface IGetScheduleInfo {
  GetScheduleInfo(busNumber: string): Observable<[Date[], Date[]]>;
}
