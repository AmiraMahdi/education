import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventUrl: string = "http://localhost:3000/events"

  constructor(private httpClient: HttpClient) { }

  addEvent(obj: any) {
    return this.httpClient.post<{ msg: string }>(this.eventUrl, obj);
  }

  getAllEvents() {
    return this.httpClient.get<{ T: any }>(this.eventUrl);
  }

  getEventById(id: number) {
    return this.httpClient.get<{ eventFound: any }>(`${this.eventUrl}/${id}`);
  }

  updateEvent(obj: any) {
    return this.httpClient.put<{ msg: string }>(this.eventUrl, obj);
  }
  
  deleteEvent(id: number) {
    return this.httpClient.delete<{ msg: string }>(`${this.eventUrl}/${id}`);
  }


}
