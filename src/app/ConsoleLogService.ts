import {Injectable} from '@angular/core';
import {ISimpleLogService} from '../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';

@Injectable()
export class ConsoleLogService implements ISimpleLogService {
  Log(obj: any): void {
    if (console) {
      //console.log(JSON.stringify(obj));
    }
  }

}
