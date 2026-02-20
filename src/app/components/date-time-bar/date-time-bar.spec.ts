import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeBar } from './date-time-bar';

describe('DateTimeBar', () => {
  let component: DateTimeBar;
  let fixture: ComponentFixture<DateTimeBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTimeBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTimeBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
