import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-bar',
  imports: [CommonModule],
  templateUrl: './date-time-bar.html',
  styleUrl: './date-time-bar.css',
})

export class DateTimeBar implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  private timer: any;

  ngOnInit() {
    // Updates the time every 1 second
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    // Prevents memory leaks
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
