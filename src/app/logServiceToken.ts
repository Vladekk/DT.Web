import {InjectionToken} from '@angular/core';
import {ConsoleLogService} from './ConsoleLogService';

import {ISimpleLogService} from '../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';

export let logServiceToken = new InjectionToken<ISimpleLogService>('');
export let consoleLogServiceInstance = new ConsoleLogService();


