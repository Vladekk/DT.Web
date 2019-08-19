import {ISimpleLogService} from '../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';
import {Injectable} from '@angular/core';

@Injectable()
export class ConsoleLogService implements ISimpleLogService {
  Log(obj: any): void {
    if (console) {
      console.log(JSON.stringify(obj));
    }
  }

}
