import { Component, OnInit } from '@angular/core';
import { allEvents } from 'src/app/data/eventsData';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
banner:string="Events";
events:any;
  constructor( private eventsService:EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(
      (data) => {
        this.events = data.T;
      }
    )
  }

}
