import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {ISimpleLogService} from '../../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {logServiceToken} from '../logServiceToken';
import {interval, Observable, Subscription} from 'rxjs';
import {first, map} from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ScheduleComponent implements OnInit, OnDestroy {
  now: Date;
  private fromCenterSchedule$: Observable<Date[]>;
  private toCenterSchedule$: Observable<Date[]>;
  private subscription: Subscription = new Subscription();

  fromCenterSchedule: Date[];
  toCenterSchedule: Date[];
  private error: any;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // noinspection JSMismatchedCollectionQueryUpdate


  constructor(private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService,
              @Inject(logServiceToken)
              private logService: ISimpleLogService) {
  }

  ngOnInit(): void {

    const intervalSub =
      interval(1000).subscribe((num => {
        this.now = new Date();
      }));

    this.subscription.add(intervalSub);

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      //this.spinner.show();
      const routeNumber = params.get('routeNumber') as string;
      this.logService.Log(`Route selected is ${routeNumber}, getting schedule`);
      this.GetSchedule(routeNumber);
      return routeNumber;
    });


  }

  IsClosestToNow(row: Date, schedule: Date[]) {
    let afterNowRuns = schedule.filter(val => val > this.now);
    return afterNowRuns.length > 0 && afterNowRuns[0] == row;
  }

  public suppressUpdates(suppress: boolean) {
    if (suppress) {

    }

  }

  private GetSchedule(routeNumber: string) {
    this.fromCenterSchedule$ =
      this.scheduleService.GetScheduleInfo(routeNumber).pipe(first(),
        map(([fc, tc]) => fc));

    this.toCenterSchedule$ =
      this.scheduleService.GetScheduleInfo(routeNumber).pipe(first(),
        map(([fc, tc]) => tc));
    // .subscribe(([fc, tc]: [Date[], Date[]]) => {
    //     this.logService.Log(`Received route data`);
    //     this.logService.Log(fc);
    //     this.logService.Log(tc);
    //     this.fromCenterSchedule = fc;
    //     this.toCenterSchedule = tc;
    //     this.spinner.hide();
    //   },
    //   error => {
    //     this.error = error;
    //   });
  }
}
