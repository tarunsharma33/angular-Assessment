import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  Form!: FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.Form = new FormGroup({
      firststring: new FormControl('', [Validators.required]),
      secondstring: new FormControl('', [Validators.required]),

    });
  }
  submit(): void {
    this.submitted = true;
    if (this.Form.valid) {
      this.is_anagram(this.Form.controls.firststring.value, this.Form.controls.secondstring.value);
      this.Form.reset();
      this.submitted = false;
    }
  }

  is_anagram(a: string, b: string): boolean {
    return a.split('').sort().join() === b.split('').sort().join();
  }

}
