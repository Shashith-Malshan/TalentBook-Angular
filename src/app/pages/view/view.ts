import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { ViewInterviews } from "../../components/view-interviews/view-interviews";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-view',
  imports: [NavBar, ViewInterviews, Footer],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View {

}
