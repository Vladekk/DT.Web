import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {IRoute} from '../IRoute';
import {Route} from '../Route';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  fromCenterSchedule: Date[];
  toCenterSchedule: Date[];
  private scheduleService: ScheduleService;
  private error: any;
  // noinspection JSMismatchedCollectionQueryUpdate
  private Routes: IRoute[] = [];

  constructor(scheduleService: ScheduleService) {
    this.scheduleService = scheduleService;
  }

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
