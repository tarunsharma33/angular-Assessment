import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-temp-tracker',
  templateUrl: './temp-tracker.component.html',
  styleUrls: ['./temp-tracker.component.scss']
})
export class TempTrackerComponent implements OnInit {
  Form!: FormGroup;
  submitted = false;
  fianlArrray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.Form = new FormGroup({
      firstnumber: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])

    });
  }
  submit(): void {
    this.submitted = true;
    if (this.Form.valid) {
      console.log(this.insert(this.Form.controls.firstnumber.value));
      this.Form.reset();
      this.submitted = false;

    }
  }
  insert(n: number): any {
    if (typeof n === 'number') {
      if (n > 0 && n < 150) {
        if (n === n && (n % 1 === 0)) {
          this.fianlArrray.push(n);
          return this.fianlArrray;
        }
        else {
          return 'Temperature should be integer';
        }
      }
      else {
        return 'Temperature should be in range 0 ℃ to 150 ℃.';
      }
    }
    else {
      return 'Temperature should be integer';
    }
  }
  get_min(): number {
    return Math.min.apply(null, this.fianlArrray);
  }
  get_max(): number {
    return Math.max.apply(null, this.fianlArrray);

  }
  get_mean(): number {
    let totalSum = 0;
    this.fianlArrray.forEach((element) => {
      totalSum += element;
    });
    return totalSum / this.fianlArrray.length;
  }
  get_mode(): number {
    let mode = 0;
    for (let i = 0; i < this.fianlArrray.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.fianlArrray[j] === this.fianlArrray[i]) {
          mode = this.fianlArrray[j];
        }
      }
    }
    return mode;

  }
}

