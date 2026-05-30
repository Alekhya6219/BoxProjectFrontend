import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcomponentComponent } from './bookcomponent.component';

describe('BookcomponentComponent', () => {
  let component: BookcomponentComponent;
  let fixture: ComponentFixture<BookcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
