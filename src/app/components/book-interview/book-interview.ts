import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeslotsHolder } from "../timeslots-holder/timeslots-holder";


@Component({
  selector: 'app-book-interview',
  imports: [CommonModule, TimeslotsHolder],
  templateUrl: './book-interview.html',
  styleUrl: './book-interview.css',
})
export class BookInterview {
selectedSlot: any;

}
