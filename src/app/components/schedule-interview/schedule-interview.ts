import { Component } from '@angular/core';
import { TimeslotsHolder } from '../timeslots-holder/timeslots-holder';


@Component({
  selector: 'app-schedule-interview',
  imports: [TimeslotsHolder],
  templateUrl: './schedule-interview.html',
  styleUrl: './schedule-interview.css',
})
export class ScheduleInterview {
selectedSlot: any;

}
