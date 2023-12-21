import { Component, OnInit } from '@angular/core';
import { allCourses } from 'src/app/data/coursesData';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
banner:string="Courses";
courses:any;
  constructor( private coursesService:CoursesService) { }

  ngOnInit() {
    this.coursesService.getAllCourses().subscribe(
      (data) => {
        this.courses = data.T;
      }
    )
  }

}
