import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsModule} from '../events/events.module';
import {OverlayNavComponent} from './overlay-nav/overlay-nav.component';
import {TopNavComponent} from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    EventsModule
  ],
  declarations: [
    OverlayNavComponent,
    TopNavComponent
  ],
  exports: [
    OverlayNavComponent,
    TopNavComponent
  ]
})
export class NavigationModule {
}
