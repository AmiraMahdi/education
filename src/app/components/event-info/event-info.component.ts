import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allEvents } from 'src/app/data/eventsData';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  banner: string = "Event";
  eventId: any;
  events: any = allEvents;
  foundEvent: any;
  constructor(private activatedRoute:ActivatedRoute,
    private eventsService:EventsService) { }

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
   
    console.log("here is event id", this.eventId);
    this.foundEvent = this.eventsService.getEventById(this.eventId).subscribe(
        (data)=>{
          this.foundEvent= data.eventFound;
          console.log("event obj",data.eventFound)
        }
        
        
      );
  }

}
