import { ObserveComponent } from './observe/observe.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent },
{path: 'manage-staff', component: ManageStaffComponent},
{path: 'permissions', component: PermissionsComponent},
{path: 'observe', component: ObserveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
