import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayNavComponent } from './overlay-nav/overlay-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule
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
export class NavigationModule { }
