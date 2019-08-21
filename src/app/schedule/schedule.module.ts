import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleComponent} from './schedule.component';
import {RouterModule, Routes} from '@angular/router';
import {RouteSelectorComponent} from './route-selector/route-selector.component';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'Route/:routeNumber', component: ScheduleComponent},
  {path: '', redirectTo: 'Route/17A', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [ScheduleComponent, RouteSelectorComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), NgbDropdownModule, NgbModule
  ],
  exports: [
    ScheduleComponent, RouterModule
  ],
  bootstrap: [ScheduleComponent]

})
export class ScheduleModule {
}
