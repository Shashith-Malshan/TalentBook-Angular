import { Component } from '@angular/core';
import { Timeslots } from '../timeslots/timeslots';

@Component({
  selector: 'app-timeslots-holder',
  imports: [Timeslots,],
  templateUrl: './timeslots-holder.html',
  styleUrl: './timeslots-holder.css',
})
export class TimeslotsHolder {
  timeslots = [
    { time: '10:30', available: true },
    { time: '11:00', available: false },
    { time: '11:30', available: true },
    { time: '12:00', available: true },
    { time: '12:30', available: false },
    { time: '13:00', available: true },
    { time: '13:30', available: true },
    { time: '14:00', available: false },
    { time: '14:30', available: true },
    { time: '15:00', available: true },

  ];

  selectedTimes = new Set<string>();

 toggleTime(timeslot: { time: string; available: boolean }) {
  if (!timeslot.available) return;

  if (this.selectedTimes.has(timeslot.time)) {
    this.selectedTimes.delete(timeslot.time); // unselect
  } else {
    this.selectedTimes.add(timeslot.time); // select
  }
}


  
 

}
