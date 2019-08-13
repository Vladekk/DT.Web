import {Component, OnInit} from '@angular/core';
import {IRoute} from '../../IRoute';
import {Route} from '../../Route';

import {ScheduleService} from '../../../services/schedule.service';


@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss']
})


export class RouteSelectorComponent implements OnInit {

  public Routes: IRoute[] = [];

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {

    this.scheduleService.GetAllRoutes()
      .subscribe((routes: Route[]) => {
          this.Routes = routes;
        });
  }


}
