import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allEvents } from 'src/app/data/eventsData';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  banner: string = "Add event";
  eventForm: FormGroup;
  obj: any = {};
  eventId: any;
  events: any;
  constructor(private builder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.events = allEvents;
    this.eventForm = this.builder.group({
      title: [''],
      description: [''],
      starting: [''],
      ending: [''],
      time: [''],
      address: [''],
      price: ['']
    })
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.banner = "Edit event"
      this.eventsService.getEventById(this.eventId).subscribe(
        (data) => {
          this.obj = data.eventFound;
          console.log("event obj", data.eventFound)
        }


      );

    };
    }
    addOrEditEvent() {
      if (this.eventId) {
        this.eventsService.updateEvent(this.obj).subscribe(
          (data) => {
            console.log("here edit data", data.msg);

          }
        );
      } else {
        this.eventsService.addEvent(this.obj).subscribe(
          (data) => {
            console.log("here add data", data.msg)

          })
      }
      this.router.navigate(['admin']);
    }

  }
