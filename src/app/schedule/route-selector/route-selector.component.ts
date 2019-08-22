import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {ScheduleService} from '../../../services/schedule.service';
import {IRoute} from '../../IRoute';
import {Route} from '../../Route';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RouteSelectorComponent implements OnInit {

  public Routes: IRoute[] = [];
  RouteNumber: string;

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  private routes$: Observable<Route[]>;

  public onOpenChange(isOpen: boolean) {
    if (isOpen) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

  constructor(private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.routes$ = this.scheduleService.GetAllRoutes();
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.RouteNumber = params.get('routeNumber') as string;
    });

  }


}
