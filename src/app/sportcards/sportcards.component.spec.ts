import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportcardsComponent } from './sportcards.component';

describe('SportcardsComponent', () => {
  let component: SportcardsComponent;
  let fixture: ComponentFixture<SportcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
