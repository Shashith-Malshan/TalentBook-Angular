import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { ScheduleInterview } from "../../components/schedule-interview/schedule-interview";
import { Footer } from "../../components/footer/footer";
import { DateTimeBar } from "../../components/date-time-bar/date-time-bar";

@Component({
  selector: 'app-shedule',
  imports: [NavBar, ScheduleInterview, Footer, DateTimeBar],
  templateUrl: './shedule.html',
  styleUrl: './shedule.css',
})
export class Shedule {

}
