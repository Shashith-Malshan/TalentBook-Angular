import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-interviews',
  imports: [CommonModule],
  templateUrl: './view-interviews.html',
  styleUrl: './view-interviews.css',
})
export class ViewInterviews {
currentFilter: string = 'All';
}
