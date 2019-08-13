import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {IRoute} from '../IRoute';
import {Route} from '../Route';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  fromCenterSchedule: Date[];
  toCenterSchedule: Date[];
  private error: any;
  // noinspection JSMismatchedCollectionQueryUpdate
  private Routes: IRoute[] = [];

  constructor(private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const routeNumber = params.get('routeNumber') as string;
      this.GetSchedule(routeNumber);
      return routeNumber;
    });

    this.scheduleService.GetAllRoutes()
      .subscribe((routes: Route[]) => {
          this.Routes = routes;
        },
        error => {
          this.error = error;
        });
  }


  private GetSchedule(routeNumber: string) {
    this.scheduleService.GetScheduleInfo(routeNumber)
      .subscribe(([fc, tc]: [Date[], Date[]]) => {
          this.fromCenterSchedule = fc;
          this.toCenterSchedule = tc;
        },
        error => {
          this.error = error;
        });
  }
}
