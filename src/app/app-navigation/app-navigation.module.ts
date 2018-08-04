import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavigationComponent,
    TopNavComponent
  ],
  exports: [
    NavigationComponent,
    TopNavComponent
  ]
})
export class AppNavigationModule { }
