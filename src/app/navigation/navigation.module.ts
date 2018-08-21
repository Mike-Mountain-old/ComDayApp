import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsModule} from '../events/events.module';
import {UsersModule} from '../users/users.module';

import {OverlayNavComponent} from './overlay-nav/overlay-nav.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {ModalComponent} from '../Shared/modal/modal.component';
import {SpinnerComponent} from '../Shared/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    EventsModule,
    UsersModule
  ],
  declarations: [
    OverlayNavComponent,
    TopNavComponent,
    ModalComponent,
    SpinnerComponent
  ],
  exports: [
    OverlayNavComponent,
    TopNavComponent,
    ModalComponent,
    SpinnerComponent
  ]
})
export class NavigationModule {
}
