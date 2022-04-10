import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './services/User/user.component';
import { JobComponent } from './services/Job/job.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'jobs', component: JobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
