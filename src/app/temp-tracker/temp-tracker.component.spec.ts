import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TempTrackerComponent } from './temp-tracker.component';

describe('TempTrackerComponent', () => {
  let component: TempTrackerComponent;
  let fixture: ComponentFixture<TempTrackerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempTrackerComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TempTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('negative value should fail validation', () => {
    expect(component.insert(-1)).toBe('Temperature should be in range 0 ℃ to 150 ℃.');
  });
  it('greater then 150 value should fail validation', () => {
    expect(component.insert(151)).toBe('Temperature should be in range 0 ℃ to 150 ℃.');
  });
  it('float value should fail validation', () => {
    expect(component.insert(2.7)).toBe('Temperature should be integer');
  });
  it('integer value should pass validation', () => {
    expect(component.insert(10)).toEqual([10]);
  });
  it('should get min. element value', () => {
    component.insert(10);
    component.insert(2);
    component.insert(7);
    expect(component.get_min()).toEqual(2);
  });
  it('should get max. element value', () => {
    component.insert(10);
    component.insert(2);
    component.insert(7);
    expect(component.get_max()).toEqual(10);
  });
  it('should get mean element value', () => {
    component.insert(10);
    component.insert(2);
    component.insert(7);
    expect(component.get_mean()).toEqual(6.33);
  });
  it('should get mode element value', () => {
    component.insert(10);
    component.insert(2);
    component.insert(2);
    component.insert(7);
    expect(component.get_mode()).toEqual(2);
  });
});
