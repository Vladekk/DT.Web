import {Component, Inject, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {ISimpleLogService} from '../../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {logServiceToken} from '../logServiceToken';

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


  constructor(private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService,
              @Inject(logServiceToken)
              private logService: ISimpleLogService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.spinner.show();
      const routeNumber = params.get('routeNumber') as string;
      this.logService.Log(`Route selected is ${routeNumber}, getting schedule`);
      this.GetSchedule(routeNumber);
      return routeNumber;
    });


  }


  private GetSchedule(routeNumber: string) {
    this.scheduleService.GetScheduleInfo(routeNumber)
      .subscribe(([fc, tc]: [Date[], Date[]]) => {
          this.logService.Log(`Received route data`);
          this.logService.Log(fc);
          this.logService.Log(tc);
          this.fromCenterSchedule = fc;
          this.toCenterSchedule = tc;
          this.spinner.hide();
        },
        error => {
          this.error = error;
        });
  }
}
