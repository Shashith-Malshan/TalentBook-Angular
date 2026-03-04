import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotsHolder } from './timeslots-holder';

describe('TimeslotsHolder', () => {
  let component: TimeslotsHolder;
  let fixture: ComponentFixture<TimeslotsHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeslotsHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeslotsHolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
