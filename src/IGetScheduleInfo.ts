import {Observable} from 'rxjs';

export interface IGetScheduleInfo {
  GetScheduleInfo(): Observable<[Date[], Date[]]>;
}
