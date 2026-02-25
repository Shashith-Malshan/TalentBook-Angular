import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timeslots',
  imports: [],
  templateUrl: './timeslots.html',
  styleUrl: './timeslots.css',
})
export class Timeslots {
  @Input() timeslot!: { time: string; available: boolean };
  @Input() isSelected: boolean = false;

  @Output() slotClick = new EventEmitter<void>();

  handleClick() {
    this.slotClick.emit();
  }

  get buttonClasses(): string {
    if (!this.timeslot.available) {
      return 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed';
    }

    if (this.isSelected) {
      return 'bg-[#0077b6] text-white border-[#0077b6] shadow-lg scale-105';
    }

    return 'bg-white text-gray-700 border-gray-200 hover:border-[#0077b6]/50 hover:bg-[#0077b6]/10';
  }


}
