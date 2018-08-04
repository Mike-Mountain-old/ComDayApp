import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppNavigationModule } from './app-navigation/app-navigation.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
