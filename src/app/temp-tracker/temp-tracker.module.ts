import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempTrackerRoutingModule } from './temp-tracker-routing.module';
import { TempTrackerComponent } from './temp-tracker.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TempTrackerComponent],
  imports: [
    CommonModule,
    TempTrackerRoutingModule,
    ReactiveFormsModule
  ]
})
export class TempTrackerModule { }
