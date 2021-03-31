import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnagramRoutingModule } from './anagram-routing.module';
import { AnagramComponent } from './anagram.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AnagramComponent],
  imports: [
    CommonModule,
    AnagramRoutingModule,
    ReactiveFormsModule
  ]
})
export class AnagramModule { }
