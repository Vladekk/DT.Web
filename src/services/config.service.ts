import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  // scheduleServiceUrl = 'https://dangulartransport.izvne.workers.dev/';
  ScheduleServiceUrl = 'http://localhost:3000';
}
