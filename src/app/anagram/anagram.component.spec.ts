import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramComponent } from './anagram.component';

describe('AnagramComponent', () => {
  let component: AnagramComponent;
  let fixture: ComponentFixture<AnagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnagramComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('value should fail validation', () => {
    expect(component.is_anagram('cellar', 'recall')).toBe(true);
  });
  it('value should pass validation', () => {
    expect(component.is_anagram('arm', 'elbow')).toBe(false);
  });
});
