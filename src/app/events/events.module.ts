import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsRoutingModule} from './events-routing.module';
import {CreateEventComponent} from './create-event/create-event.component';
import {SingleEventComponent} from './single-event/single-event.component';
import {EventArchiveComponent} from './event-archive/event-archive.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  declarations: [
    CreateEventComponent,
    SingleEventComponent,
    EventArchiveComponent
  ],
  exports: [
    CreateEventComponent,
    SingleEventComponent,
    EventArchiveComponent,
    EventsRoutingModule
  ]
})
export class EventsModule {
}
