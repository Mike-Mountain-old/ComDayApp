import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsModule} from '../events/events.module';
import {UsersModule} from '../users/users.module';

import {OverlayNavComponent} from './overlay-nav/overlay-nav.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {ModalComponent} from '../Shared/modal/modal.component';
import {SpinnerModule} from '../Shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    EventsModule,
    UsersModule,
    SpinnerModule
  ],
  declarations: [
    OverlayNavComponent,
    TopNavComponent,
    ModalComponent,
  ],
  exports: [
    OverlayNavComponent,
    TopNavComponent,
    ModalComponent,
  ]
})
export class NavigationModule {
}
