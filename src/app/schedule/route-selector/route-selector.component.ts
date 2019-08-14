import {Component, OnInit} from '@angular/core';
import {IRoute} from '../../IRoute';
import {Route} from '../../Route';

import {ScheduleService} from '../../../services/schedule.service';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss']
})


export class RouteSelectorComponent implements OnInit {

  public Routes: IRoute[] = [];
  private RouteNumber: string;

  constructor(private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.scheduleService.GetAllRoutes()
      .subscribe((routes: Route[]) => {
        this.Routes = routes;
      });

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.RouteNumber = params.get('routeNumber') as string;
    });

  }


}
