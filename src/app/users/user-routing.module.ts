import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../auth-guard.service';

import {ProfileComponent} from './profile/profile.component';

const userRoutes: Routes = [
  {
    path: 'user/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {path: 'edit-profile', component: ProfileComponent},
          {path: 'user-settings', component: ProfileComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
