import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('blank first name value should fail validation', () => {
    const firstname = component.registerForm.controls.firstname;
    expect(firstname.valid).toBeFalsy();
    expect(firstname.pristine).toBeTruthy();
    expect(firstname.hasError('required')).toBeTruthy();
  });
  it('first name string value should pass validation', () => {
    const firstname = component.registerForm.controls.firstname;
    expect(firstname.valid).toBeFalsy();
    expect(firstname.pristine).toBeTruthy();
    firstname.setValue('abc');
    expect(firstname.hasError('required')).toBeFalsy();
  });
  it('less than five char first name string value should fail validation', () => {
    const firstname = component.registerForm.controls.firstname;
    firstname.setValue('abc');
    expect(firstname.hasError('minLength')).toBeFalsy();
  });
  it('greater than five char first name string value should pass validation', () => {
    const firstname = component.registerForm.controls.firstname;
    firstname.setValue('abcderf');
    expect(firstname.hasError('minLength')).toBeFalsy();
  });
  it('blank last name value should fail validation', () => {
    const lastname = component.registerForm.controls.lastname;
    expect(lastname.valid).toBeFalsy();
    expect(lastname.pristine).toBeTruthy();
    expect(lastname.hasError('required')).toBeTruthy();
  });
  it('last name string value should pass validation', () => {
    const lastname = component.registerForm.controls.lastname;
    expect(lastname.valid).toBeFalsy();
    expect(lastname.pristine).toBeTruthy();
    lastname.setValue('abc');
    expect(lastname.hasError('required')).toBeFalsy();
  });
  it('less than five char last name string value should fail validation', () => {
    const lastname = component.registerForm.controls.lastname;
    lastname.setValue('abc');
    expect(lastname.hasError('minLength')).toBeFalsy();
  });
  it('greater than five char last name string value should pass validation', () => {
    const lastname = component.registerForm.controls.lastname;
    lastname.setValue('abcderf');
    expect(lastname.hasError('minLength')).toBeFalsy();
  });
  it('blank phoneNumber value should fail validation', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    expect(phoneNumber.valid).toBeFalsy();
    expect(phoneNumber.pristine).toBeTruthy();
    expect(phoneNumber.hasError('required')).toBeTruthy();
  });
  it('phoneNumber value should pass required validation', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    expect(phoneNumber.valid).toBeFalsy();
    expect(phoneNumber.pristine).toBeTruthy();
    phoneNumber.setValue(785);
    expect(phoneNumber.hasError('required')).toBeFalsy();
  });
  it('should accept only digit', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    phoneNumber.setValue('abc');
    expect(phoneNumber.hasError('pattern')).toBeTruthy();
  });
  it('phoneNumber value should pass validation', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    phoneNumber.setValue(7859997932);
    expect(phoneNumber.hasError('pattern')).toBeFalsy();
  });
  it('blank country value should fail validation', () => {
    const country = component.registerForm.controls.country;
    expect(country.valid).toBeFalsy();
    expect(country.pristine).toBeTruthy();
    expect(country.hasError('required')).toBeTruthy();
  });
  it('country value should pass validation', () => {
    const country = component.registerForm.controls.country;
    expect(country.valid).toBeFalsy();
    expect(country.pristine).toBeTruthy();
    country.setValue('IN');
    expect(country.hasError('required')).toBeFalsy();
  });
});
