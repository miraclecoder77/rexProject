import { RolesUpdateComponent } from './permissions/roles-update/roles-update.component';
import { RolesComponent } from './permissions/roles/roles.component';
import { StaffUserComponent } from './staff-user/staff-user.component';
import { StaffListComponent } from './manage-staff/staff-list/staff-list.component';
import { UpdateStaffComponent } from './manage-staff/update-staff/update-staff.component';
import { ObserveComponent } from './observe/observe.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent,
             children: [
              { path: '', pathMatch: 'full', redirectTo: 'user' },
              { path: 'user', component: StaffUserComponent },
              { path: 'manage-staff', component: ManageStaffComponent,
                    children: [
                      { path: '', pathMatch: 'full', redirectTo: 'staff-list' },
                      { path: 'staff-list', component: StaffListComponent },
                      { path: 'update-staff', component: UpdateStaffComponent },
                    ] },

              {path: 'permissions', component: PermissionsComponent,
                  children: [
                    { path: '', pathMatch: 'full', redirectTo: 'roles' },
                    { path: 'roles', component: RolesComponent },
                    { path: 'roles-update', component: RolesUpdateComponent },
                    // {path: 'observe', component: ObserveComponent}
                  ]},
             ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
