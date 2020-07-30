import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorReducer } from './store/reducer';

@NgModule({
  declarations: [AppComponent, DoctorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ doctors: DoctorReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
