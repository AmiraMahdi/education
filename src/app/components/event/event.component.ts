import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
@Input() y:any;
  constructor() { }

  ngOnInit() {
    
  }
  eventPrice(p:number) {
    if ((p > 0) && (p<100)) {
      return 'red'
    }
    else if ((p >= 100) && (p<500)) {
      return 'orange'
    }
    else if (p >= 500){
      return 'blue'
    }
  }

}
