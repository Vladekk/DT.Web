import {InjectionToken} from '@angular/core';
import {ConsoleLogService} from './ConsoleLogService';

// import {ISimpleLogService} from '../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';
export interface ISimpleLogService {
  Log(obj: any): void;
}


export let logServiceToken = new InjectionToken<ISimpleLogService>('');
export let consoleLogServiceInstance = new ConsoleLogService();


