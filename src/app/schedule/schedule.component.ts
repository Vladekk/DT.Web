import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {ISimpleLogService} from '../../../../DT-Backend/src/services/SimpleLogService/ISimpleLogService';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {logServiceToken} from '../logServiceToken';
import {interval, Observable, Subscription} from 'rxjs';
import {first, map} from 'rxjs/operators';
import bind from 'bind-decorator';
import {IRunVm} from './IRunVm';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ScheduleComponent implements OnInit, OnDestroy {
  now: Date = new Date();
  private fromCenterSchedule$: Observable<IRunVm[]>;
  private toCenterSchedule$: Observable<IRunVm[]>;
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

  @bind
  IsClosestToNow(row: Date, schedule: Date[]) {
    let afterNowRuns = schedule.filter(val => val > this.now);
    return afterNowRuns.length > 0 && afterNowRuns[0] == row;
  }

  public suppressUpdates(suppress: boolean) {
    if (suppress) {

    }

  }

  @bind
  private MapToVm(runTimes) {
    return runTimes.map((row) => {
      return {
        'RunTime': row,
        'IsClosest': this.IsClosestToNow(row, runTimes)
      };
    });
  }

  private GetSchedule(routeNumber: string) {
    this.fromCenterSchedule$ =
      this.scheduleService.GetScheduleInfo(routeNumber)
        .pipe(first(),
          map(([fc]) => fc),
          map(this.MapToVm));


    this.toCenterSchedule$ =
      this.scheduleService.GetScheduleInfo(routeNumber)
        .pipe(first(),
          map(([, tc]) => tc),
          map(this.MapToVm));
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
