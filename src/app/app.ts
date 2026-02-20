import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { ViewInterviews } from "./components/view-interviews/view-interviews";
import { BookInterview } from "./components/book-interview/book-interview";
import { ScheduleInterview } from "./components/schedule-interview/schedule-interview";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, ViewInterviews, BookInterview, ScheduleInterview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TalentBook');
}
