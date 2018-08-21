import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../auth-guard.service';

import {CreateEventComponent} from './create-event/create-event.component';
import {SingleEventComponent} from './single-event/single-event.component';
import {EventArchiveComponent} from './event-archive/event-archive.component';

const routes: Routes = [
  {path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard]},
  {path: 'event', component: SingleEventComponent},
  {path: 'event-archive', component: EventArchiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
