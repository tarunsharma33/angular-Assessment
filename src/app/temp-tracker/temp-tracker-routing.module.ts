import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempTrackerComponent } from './temp-tracker.component';

const routes: Routes = [{ path: '', component: TempTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempTrackerRoutingModule { }
