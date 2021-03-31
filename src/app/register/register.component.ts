import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      country: new FormControl('', [Validators.required]),
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.route.navigateByUrl('/thanks');
    }
  }

}
