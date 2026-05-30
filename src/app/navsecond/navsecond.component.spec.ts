import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsecondComponent } from './navsecond.component';

describe('NavsecondComponent', () => {
  let component: NavsecondComponent;
  let fixture: ComponentFixture<NavsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
