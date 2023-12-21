import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allEvents } from 'src/app/data/eventsData';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {
events:any;
constructor(private router: Router,
  private eventsService: EventsService) { }

ngOnInit() {
  this.allEvents();

}
allEvents(){
  this.eventsService.getAllEvents().subscribe(
    (data) => {
      this.events = data.T;
    }
  )
};
goToDisplay(id: number) {
 
  this.router.navigate([`eventInfo/${id}`])
}
goToEdit(id: number) {
  this.router.navigate([`editEvent/${id}`])
}
deleteEvent(id: number){
  this.eventsService.deleteEvent(id).subscribe(
    (data) => {
      console.log("here is delete data", data.msg)
      this.allEvents();
    }
  );
}
}
