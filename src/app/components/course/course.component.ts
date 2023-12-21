import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
@Input() course:any;
  constructor( private usersService:UsersService) { }

  ngOnInit() {
    
  }

}
