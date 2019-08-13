import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../services/schedule.service';
import {IRoute} from './IRoute';
import {Route} from './Route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private scheduleService: ScheduleService;
  private error: any;

  constructor(scheduleService: ScheduleService) {
    this.scheduleService = scheduleService;
  }


  // noinspection JSMismatchedCollectionQueryUpdate
  private Routes: IRoute[] = [];
  title = 'DangularSatiksme';
  fromCenterSchedule: Date[];
  toCenterSchedule: Date[];

  ngOnInit(): void {
    this.scheduleService.GetScheduleInfo()
      .subscribe(([fc, tc]: [Date[], Date[]]) => {
          this.fromCenterSchedule = fc;
          this.toCenterSchedule = tc;
        },
        error => {
          this.error = error;
        });

    this.scheduleService.GetAllRoutes()
      .subscribe((routes: Route[]) => {
          this.Routes = routes;
        },
        error => {
          this.error = error;
        });
  }

}

