import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-schedule-interview',
  imports: [CommonModule],
  templateUrl: './schedule-interview.html',
  styleUrl: './schedule-interview.css',
})
export class ScheduleInterview {
selectedSlot: any;

}
