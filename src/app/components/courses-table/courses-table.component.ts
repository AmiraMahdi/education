import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allCourses } from 'src/app/data/coursesData';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {
  courses: any;
  constructor(private router: Router,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.allCourses();

  }
  allCourses(){
    this.coursesService.getAllCourses().subscribe(
      (data) => {
        this.courses = data.T;
      }
    )
  };
  goToDisplay(id: number) {
   
    this.router.navigate([`courseInfo/${id}`])
  }
  goToEdit(id: number) {
    this.router.navigate([`editCourse/${id}`])
  }
  deleteCourse(id: number){
    this.coursesService.deleteCourse(id).subscribe(
      (data) => {
        console.log("here is delete data", data.msg)
        this.allCourses();
      }
    );
  }

}
