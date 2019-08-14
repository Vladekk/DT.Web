import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

//import {RouteSelector} from './route-selector/route-selector.component'

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


  constructor(private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute,private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.spinner.show();
      const routeNumber = params.get('routeNumber') as string;
      this.GetSchedule(routeNumber);
      return routeNumber;
    });


  }


  private GetSchedule(routeNumber: string) {
    this.scheduleService.GetScheduleInfo(routeNumber)
      .subscribe(([fc, tc]: [Date[], Date[]]) => {
          this.fromCenterSchedule = fc;
          this.toCenterSchedule = tc;
          this.spinner.hide();
        },
        error => {
          this.error = error;
        });
  }
}
