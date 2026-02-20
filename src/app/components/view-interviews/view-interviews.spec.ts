import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterviews } from './view-interviews';

describe('ViewInterviews', () => {
  let component: ViewInterviews;
  let fixture: ComponentFixture<ViewInterviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInterviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInterviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
