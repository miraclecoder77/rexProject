import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ObserveComponent } from './observe/observe.component';


@NgModule({
  declarations: [
    UserComponent,
    ManageStaffComponent,
    PermissionsComponent,
    ObserveComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
