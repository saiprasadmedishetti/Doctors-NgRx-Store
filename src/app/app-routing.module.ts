import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './components/doctor/doctor.component';

const routes: Routes = [{ path: '', component: DoctorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
