import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ObserveComponent } from './observe/observe.component';
import { StaffListComponent } from './manage-staff/staff-list/staff-list.component';
import { UpdateStaffComponent } from './manage-staff/update-staff/update-staff.component';
import { StaffUserComponent } from './staff-user/staff-user.component';
import { RolesComponent } from './permissions/roles/roles.component';
import { RolesUpdateComponent } from './permissions/roles-update/roles-update.component';


@NgModule({
  declarations: [
    UserComponent,
    ManageStaffComponent,
    PermissionsComponent,
    ObserveComponent,
    StaffListComponent,
    UpdateStaffComponent,
    StaffUserComponent,
    RolesComponent,
    RolesUpdateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
