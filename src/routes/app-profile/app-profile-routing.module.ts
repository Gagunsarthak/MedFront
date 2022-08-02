import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppProfileComponent } from './app-profile.component';
import { ProfileDetailsEditComponent } from './components/profile-details-edit/profile-details-edit.component';

const routes: Routes = [{ path: '', component: AppProfileComponent },{ path: 'details', component: ProfileDetailsEditComponent }];
// const newPageRoutes: Routes = [{ path: '/details', component: ProfileDetailsEditComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppProfileRoutingModule {}
