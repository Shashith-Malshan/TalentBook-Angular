import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Booking {
  private url: any ="http://localhost:8080/booking-info/testing";
    
  constructor(private http:HttpClient) {}

  addBooking(booking:Booking):Observable<Booking>{
    console.log(booking);
    return this.http.post<Booking>(this.url, booking);
  }
  
}
