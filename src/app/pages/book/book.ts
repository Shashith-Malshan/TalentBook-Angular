import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { BookInterview } from "../../components/book-interview/book-interview";
import { Footer } from "../../components/footer/footer";
import { DateTimeBar } from "../../components/date-time-bar/date-time-bar";

@Component({
  selector: 'app-book',
  imports: [NavBar, BookInterview, Footer, DateTimeBar],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {

}
